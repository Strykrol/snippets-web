// This snippet file was generated by processing the source file:
// snippets/firestore-next/test-firestore/new_document.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_new_document]
import { collection, doc, setDoc } from "firebase/firestore"; 

// Add a new document with a generated id
const newCityRef = doc(collection(db, "cities"));

// later...
await setDoc(newCityRef, data);
// [END modular_new_document]