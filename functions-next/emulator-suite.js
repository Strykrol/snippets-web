// [SNIPPET_REGISTRY disabled]
// [SNIPPETS_SEPARATION enabled]

import { initializeApp } from "firebase/app";

initializeApp({
  projectId: '### CLOUD FUNCTIONS PROJECT ID ###',
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
});

export function emulatorSettings() {
  // [START firebase_emulator_connect]
  const { getApp } = require("firebase/app");
  const { getFunctions, useFunctionsEmulator } = require("firebase/functions");

  const functions = getFunctions(getApp());
  useFunctionsEmulator(functions, "localhost", 5001);
  // [END firebase_emulator_connect]
}

export async function callFunction() {
  // [START firebase_callable_call]
  const { getApp } = require("firebase/app");
  const { getFunctions, httpsCallable } = require("firebase/functions");

  const functions = getFunctions(getApp());
  const addMessage = httpsCallable(functions, 'addMessage');

  const result = await addMessage({ text: '<message text>'});
  const sanitizedMessage = result.data.text;
  // ...
  // [END firebase_callable_call]
}
