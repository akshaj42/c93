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
//ADD YOUR FIREBASE LINKS

function add_user(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose:"adding_user"
    });
}