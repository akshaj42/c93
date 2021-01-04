var firebaseConfig = {
      apiKey: "AIzaSyDjHxG2To64ABpOxRy9UMETNgr0sOsGLAc",
      authDomain: "kwitter-e0359.firebaseapp.com",
      databaseURL: "https://kwitter-e0359-default-rtdb.firebaseio.com",
      projectId: "kwitter-e0359",
      storageBucket: "kwitter-e0359.appspot.com",
      messagingSenderId: "398462558163",
      appId: "1:398462558163:web:352235ebdd2178de255926"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("username").innerHTML ="Welcome " + user_name + "!";

function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
            {purpose:"addingroom"}
      );
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}