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

// const FIREBASE_DOMAIN =
//   "https://arn-rai-dee-default-rtdb.asia-southeast2.firebasedatabase.app/";

export async function editUser(userData) {
  // const response = await fetch(
  //   `${FIREBASE_DOMAIN}/users/${userData.username}.json`,
  //   {
  //     method: "PUT",
  //     body: JSON.stringify(userData),
  //   }
  // );
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not create user.");
  // }

  // return null;
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

export async function getProfile(username) {
  // const response = await fetch(`${FIREBASE_DOMAIN}/users/${username}.json`);
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not fetch username");
  // }

  // const loadedQuote = {
  //   id: username,
  //   ...data,
  // };

  // return loadedQuote;
}

export async function getAllBooks() {
  try {
    const snapshot = await db
      .collection("Books")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getSingleBook(bookId) {
  // const response = await fetch(`${FIREBASE_DOMAIN}/Books/${bookId}.json`);
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not fetch quote.");
  // }

  // const loadedBook = {
  //   id: bookId,
  //   ...data,
  // };

  // return loadedBook;
}

export async function addComment(commentData) {
  // const response = await fetch(
  //   `${FIREBASE_DOMAIN}/comments/${commentData.bookId}.json`,
  //   {
  //     method: "POST",
  //     body: JSON.stringify(commentData.commentDetails),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not add comment.");
  // }

  // return { commentId: data.username };
}

export async function getAllComments(bookId) {
  // const response = await fetch(`${FIREBASE_DOMAIN}/comments/${bookId}.json`);

  // const data = await response.json();

  // if (!response.ok) {
  //   throw new Error(data.message || "Could not get comments.");
  // }

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
  // return transformedComments;
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
  const userDoc = await db.collection("Users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("Users").doc(uid).set({ name: user.displayName });
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
