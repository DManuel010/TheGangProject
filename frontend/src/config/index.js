/**
 * Config File
 *
 * This will be a storage of all data that can be changed with environment.
 * Let's say if you want to deploy this project on your own, you don't have to rewrite everything
 *
 * All you have to do is update data here and it should connect to your database and everything
 *
 * The data will be stored in what call environment variable (accessible by process.env)
 *
 * When you build the project (`yarn build`), it will take these value from the build machine and fill it in here
 * This means that these variables has to be used during build time
 *
 * NOTES: For server in general, because the application will ran directly on machine, environment variables
 * are used during runtime instead.
 *
 */
export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY || "",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || "",
  databaseURL: process.env.REACT_APP_DATABASE_URL || "",
  projectId: process.env.REACT_APP_PROJECT_ID || "",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "",
  appId: process.env.REACT_APP_APP_ID || "",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || "",
};

export default {
  FIREBASE_CONFIG,
};
