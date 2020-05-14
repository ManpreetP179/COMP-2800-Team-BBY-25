var firebaseConfig = {
    apiKey: "AIzaSyDfdy4eeQA-kzFh5U-6Dl9dsvCxJCiYU2I",
    authDomain: "team25-52eec.firebaseapp.com",
    databaseURL: "https://team25-52eec.firebaseio.com",
    projectId: "team25-52eec",
    storageBucket: "team25-52eec.appspot.com",
    messagingSenderId: "744979759825",
    appId: "1:744979759825:web:fdb78ef312d8ea8370fbf0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

getActivities();
            
var arr = localStorage.getItem("arr");
            
console.log("this is arr: " + arr);
console.log(arr.length);
            
function getActivities() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("events").doc(user.uid)
        .onSnapshot(function(snap) {
            x = snap.data().arr;
            console.log(x);
            localStorage.setItem("arr", x);
        });
    });
}