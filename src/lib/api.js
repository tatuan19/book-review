const FIREBASE_DOMAIN =
  "https://arn-rai-dee-default-rtdb.asia-southeast1.firebasedatabase.app/";

export async function getAllUser() {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedUsers = [];

  for (const key in data) {
    const usersObj = {
      id: key,
      ...data[key],
    };

    transformedUsers.push(usersObj);
  }

  return transformedUsers;
}

export async function addUser(userData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/users/${userData.username}.json`,
    {
      method: "PUT",
      body: JSON.stringify(userData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function editUser(userData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/users/${userData.username}.json`,
    {
      method: "PUT",
      body: JSON.stringify(userData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function addBook(bookData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Books/${bookData.bookId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(bookData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create book.");
  }

  return null;
}

export async function editBook(bookData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/Books/${bookData.bookId}.json`,
    {
      method: "PUT",
      body: JSON.stringify(bookData),
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function deleteUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${userData}.json`, {
    method: "DELETE",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function deleteBook(bookId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Books/${bookId}.json`, {
    method: "DELETE",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create user.");
  }

  return null;
}

export async function getProfile(username) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users/${username}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch username");
  }

  const loadedQuote = {
    id: username,
    ...data,
  };

  return loadedQuote;
}

export async function getAllBooks() {
  const response = await fetch(`${FIREBASE_DOMAIN}/Books.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch books.");
  }

  const transformedBooks = [];

  for (const key in data) {
    const bookObj = {
      id: key,
      ...data[key],
    };

    transformedBooks.push(bookObj);
  }

  return transformedBooks;
}

export async function getSingleBook(bookId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Books/${bookId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedBook = {
    id: bookId,
    ...data,
  };

  return loadedBook;
}

export async function addComment(commentData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${commentData.bookId}.json`,
    {
      method: "POST",
      body: JSON.stringify(commentData.commentDetails),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.username };
}

export async function getAllComments(bookId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${bookId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

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
}
