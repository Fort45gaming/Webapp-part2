var firebaseConfig = {
    apiKey: "AIzaSyAs10rxBKRoWLBjKq4yU8g2oc0J8g99eNc",
    authDomain: "kwitter-1c2dd.firebaseapp.com",
    databaseURL: "https://kwitter-1c2dd-default-rtdb.firebaseio.com",
    projectId: "kwitter-1c2dd",
    storageBucket: "kwitter-1c2dd.appspot.com",
    messagingSenderId: "690238511273",
    appId: "1:690238511273:web:7b2b8f00958162421571b8",
    measurementId: "G-9E8PHHLY98"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();