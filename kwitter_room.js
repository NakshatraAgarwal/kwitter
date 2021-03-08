
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDdqzTm_Obs7L2ZajjhisHHKbcF72TuzCE",
      authDomain: "kwitter-b11db.firebaseapp.com",
      databaseURL: "https://kwitter-b11db-default-rtdb.firebaseio.com",
      projectId: "kwitter-b11db",
      storageBucket: "kwitter-b11db.appspot.com",
      messagingSenderId: "563645765854",
      appId: "1:563645765854:web:353b1dfbc092f7ecd80a4f",
      measurementId: "G-CTH7XP6QKD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;
    function add_room(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id='"+Room_names+"' onclick='RedirectToRoom(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function RedirectToRoom(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}