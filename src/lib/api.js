import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCQrHcf4WtlM_LyrZssfy_QpwxXlkIQqUY",
  authDomain: "book-review-442fc.firebaseapp.com",
  projectId: "book-review-442fc",
  storageBucket: "book-review-442fc.appspot.com",
  messagingSenderId: "437559528494",
  appId: "1:437559528494:web:ed864c99d68f1677c823bf"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

const storage = firebase.storage();

export { storage};

/**
 * Books
 */
export async function getAllBooks() {
  try {
    const snapshot = await db
      .collection("Books")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    console.log(items)
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getSingleBook(bookId) {
  try {
    const bookRef = db.collection("Books");
    const snapshot = await bookRef.where("bookId", "==", bookId).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    var loadedBook;
    snapshot.forEach(doc => {
      // console.log(doc.id, '=>', doc.data());
      loadedBook = {
        id: doc.id,
        ...doc.data(),
      }
      console.log(loadedBook);
    });

    return loadedBook;
  } catch (err) {
    console.log(err);
    return;
  }
}

export async function addBook(bookData) {
  try {
    const bookRef = db.collection("Books");
    await bookRef.add(bookData);
  } catch (err) {
    console.log(err);
  }
}

export async function editBook(bookData) {
  try {
    const bookRef = db.collection("Books").doc(bookData.id);
    await bookRef.update(bookData);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteBook(bookId) {
  const bookRef = db.collection("Books").doc(bookId);
  await bookRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}

/**
 * Users
 */
export async function getProfile(email) {
  try {
    const userRef = db.collection("Users");
    const snapshot = await userRef.where("username", "==", email).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    var loadedUser;
    snapshot.forEach(doc => {
      // console.log(doc.id, '=>', doc.data());
      loadedUser = {
        id: doc.id,
        ...doc.data(),
      }
      console.log(loadedUser);
    });

    return loadedUser;
  } catch (err) {
    console.log(err);
    return;
  }
}

export async function editUser(userData) {
  try {
    const userRef = db.collection("Users");
    // const snapshot = await userRef.where("username", "==", email).get();
    // if (snapshot.empty) {
    //   console.log('No matching documents.');
    //   return;
    // }
    // var loadedUser;
    // snapshot.forEach(doc => {
    //   // console.log(doc.id, '=>', doc.data());
    //   loadedUser = {
    //     id: doc.id,
    //     ...doc.data(),
    //   }
    //   console.log(loadedUser);
    // });

    // return loadedUser;
  } catch (err) {
    console.log(err);
    return;
  }
}

/**
 * Comments
 */
export async function addComment(commentData) {
  try {
    console.log(commentData)
    const commentRef = await db.collection("Comments").doc(commentData.bookId).get();
    const data = commentRef.data().comments;
    // const transformedComments = [];

    // for (const key in data) {
    //   const commentObj = {
    //     id: key,
    //     ...data[key],
    //   };
    //   console.log(commentObj);

    //   transformedComments.push(commentObj);
    // }

    // console.log(transformedComments);

    return data;
    // return transformedComments;
  } catch (err) {
    console.log(err);
    return [];
  }

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not add comment.");
  // }

  // return { commentId: data.username };
}

export async function getAllComments(bookId) {
  try {
    const commentRef = await db.collection("Comments").doc(bookId).get();
    const data = commentRef.data().comments;
    const transformedComments = [];

    for (const key in data) {
      const commentObj = {
        id: key,
        ...data[key],
      };
      console.log(commentObj);

      transformedComments.push(commentObj);
    }

    console.log(transformedComments);

    return transformedComments;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

export const storeUserInfo = async (user) => {
  const { uid } = user;
  console.log(user)
  const userDoc = await db.collection("Users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("Users").doc(uid).set({
      name: user.displayName,
      username: user.email,
      photoURL: user.photoURL
    });
    return {
      name: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
}
