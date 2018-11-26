import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCUhm92gMTFg-aCEUEOMC-RgUgctxDG5EU",
  authDomain: "disks-catalog-client.firebaseapp.com",
  databaseURL: "https://disks-catalog-client.firebaseio.com",
  projectId: "disks-catalog-client",
  storageBucket: "disks-catalog-client.appspot.com",
  messagingSenderId: "385641035692"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
