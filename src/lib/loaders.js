import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "keep-react";
import { redirect } from "react-router";
import { auth } from "../firebase/config";

export const login = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  try {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    Object.keys(credentials).forEach((field) => {
      if (!credentials[field]) {
        throw new Error(`${field} is required field!`);
      }
    });

    // Perform login logic here
    await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );

    // Redirect to the previous route or a default route
    toast.success("Logged in successfully!");
    return redirect(`${searchTerm}?modal=open`);
  } catch (error) {
    console.error(error);
    return toast.error(error.message);
  }
};

export const register = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  try {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    Object.keys(credentials).forEach((field) => {
      if (!credentials[field]) {
        throw new Error(`${field} is required field!`);
      }
    });

    // Show a password error in the form, and don't Register for an invalid password
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(credentials.password)) {
      throw new Error(
        "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long"
      );
    }

    const result = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );

    // Set the user's display name
    await updateProfile(result.user, {
      displayName: credentials.name,
    });

    // Redirect to the previous route or a default route
    toast.success("Registered successfully!");
    return redirect(searchTerm);
  } catch (error) {
    console.error(error);
    return toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return redirect("/");
  } catch (error) {
    console.error(error);
    return toast.error(error.message);
  }
};

export const loadUser = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      },
      reject
    );
  });
};

export const loginWithGoogle = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
    await setPersistence(auth, browserLocalPersistence);

    return redirect(`${searchTerm}?modal=open`);
  } catch (error) {
    console.error(error);
    toast.error(error.message);
    return redirect("/auth/login");
  }
};

export const forgotPassword = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");

    if (!email) {
      return { error: "Please fill all the fields" };
    }

    await sendPasswordResetEmail(auth, email);
    await logout({ request });

    return redirect(`https://www.${email.split("@")[1]}`);
  } catch (error) {
    console.error(error);
    return toast.error(error.message);
  }
};

export const updateMyProfile = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const photo = formData.get("photo");

    const user = auth.currentUser;

    const profileUpdates = {};
    if (name.trim() !== "") profileUpdates.displayName = name;
    if (photo) profileUpdates.photoURL = photo;

    if (Object.keys(profileUpdates).length > 0) {
      await updateProfile(user, profileUpdates);
    }

    return redirect("/my-profile");
  } catch (error) {
    console.error(error);
    return toast.error(error.message);
  }
};