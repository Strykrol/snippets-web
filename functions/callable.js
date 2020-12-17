import firebase from "firebase/app";
import "firebase/functions";

function callAddMessage() {
  const messageText = "Hello, World!";

  // [START firebase_call_add_message]
  var addMessage = firebase.functions().httpsCallable('addMessage');
  addMessage({ text: messageText })
    .then((result) => {
      // Read result of the Cloud Function.
      var sanitizedMessage = result.data.text;
    });
  // [END firebase_call_add_message]
}

function callAddMessageError() {
  const messageText = "Hello, World!";

  // [START firebase_call_add_message_error]
  var addMessage = firebase.functions().httpsCallable('addMessage');
  addMessage({ text: messageText })
    .then((result) => {
      // Read result of the Cloud Function.
      var sanitizedMessage = result.data.text;
    })
    .catch((error) => {
      // Getting the Error details.
      var code = error.code;
      var message = error.message;
      var details = error.details;
      // ...
    });
  // [END firebase_call_add_message_error]
}
