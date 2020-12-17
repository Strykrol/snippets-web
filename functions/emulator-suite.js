import firebase from "firebase/app";
import "firebase/functions";

function emulatorSettings() {
  // [START firebase_emulator_connect]
  firebase.functions().useEmulator("localhost", 5001);
  // [END firebase_emulator_connect]
}
