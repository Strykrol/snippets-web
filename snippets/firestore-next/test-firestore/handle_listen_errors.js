// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/handle_listen_errors.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_handle_listen_errors]
import { collection, onSnapshot } from "firebase/firestore";

const unsubscribe = onSnapshot(
  collection(db, "cities"), 
  (snapshot) => {
    // ...
  },
  (error) => {
    // ...
  });
// [END modular_handle_listen_errors]