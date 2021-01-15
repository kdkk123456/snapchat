// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user")
document.getElementById("welcome").innerHTML="Welcome "+user_name+" !"

function addroom() {
      room_name=document.getElementById("roomname").value
      firebase.database().ref("/").child(room_name).update({
            purpos:"kaizad"
      });
      localStorage.setItem("room_name",room_name)
      window.location="snapchat_page.html" 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)">${Room_names}</div> <hr>`
      document.getElementById("output").innerHTML+=row
      });});}
getData();

function gotoroom(name) {
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="snapchat_page.html"
}
function logout() {
      localStorage.removeItem("user")
      localStorage.removeItem("room_name")
      window.location="index.html"
}