import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

// GitHub Sign-In
export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    console.log("GitHub User:", result.user);
  } catch (error) {
    console.error("GitHub Sign-In Error:", error);
  }
};

// Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in:", result.user);
    return result.user;
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
