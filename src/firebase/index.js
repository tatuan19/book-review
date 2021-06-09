import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

import config from "./config";

// if (firebase.app.length) {
//   firebase.initializeApp(config);
// }

export const app = firebase.initializeApp(config);
