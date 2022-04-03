const firebaseConfig = {
    apiKey: "AIzaSyBh_F30r6KNSNTN1uK6_JzZ7ezjLZ6kpMw",
    authDomain: "kwitter-2-38a8d.firebaseapp.com",
    databaseURL: "https://kwitter-2-38a8d-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-38a8d",
    storageBucket: "kwitter-2-38a8d.appspot.com",
    messagingSenderId: "442159989796",
    appId: "1:442159989796:web:2226a18c5348ff1e1544b1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
function send(){
       msg=document.getElementById("msg").value;
       firebase.database().ref("room_name").push({
             name:user_name,
             message:msg,
             like:0
       });
document.getElementById("msg").value= "";
}
 } });  }); }
getData();
