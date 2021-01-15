//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC9-6yQ3_6OuUliIMKNXHrtR-_78kdhXUs",
      authDomain: "scuffed-online-snapchat.firebaseapp.com",
      databaseURL: "https://scuffed-online-snapchat.firebaseio.com",
      projectId: "scuffed-online-snapchat",
      storageBucket: "scuffed-online-snapchat.appspot.com",
      messagingSenderId: "211199176385",
      appId: "1:211199176385:web:4de820dba20db80032ae40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user")
    room_name=localStorage.getItem("room_name")
    function send() {
          message=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                NAME:user_name,
                MESSAGE:message,
                LIKE:0
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
