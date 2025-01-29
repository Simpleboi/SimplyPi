import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

// Database for FireStore
const db = getFirestore();

// GitHub Sign-In
export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const user = result.user;

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: user.displayName || "Anonymous",
      email: user.email,
      profilePic: user.photoURL,
      provider: "GitHub",
    });

    console.log("GitHub User:", result.user);
    return user;
  } catch (error) {
    console.error("GitHub Sign-In Error:", error);
  }
};

// Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      profilePic: user.photoURL,
      provider: "Google",
    });

    console.log("User signed in:", result.user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

// Sign Up Function
export const signUpUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// Log In Function
export const logInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Log Out Function
export const logOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};
