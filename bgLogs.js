 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC5b0UfMZEYIo7dsxzwYRdYOl6ZmaCAl_E",
    authDomain: "diabetes-manager-6dead.firebaseapp.com",
    databaseURL: "https://diabetes-manager-6dead-default-rtdb.firebaseio.com",
    projectId: "diabetes-manager-6dead",
    storageBucket: "diabetes-manager-6dead.appspot.com",
    messagingSenderId: "969238045247",
    appId: "1:969238045247:web:381544eda79adf2a484e8a",
    measurementId: "G-BD5JSZ79V4"
  };

firebase.initializeApp(firebaseConfig);

function addBg() {
  var username = window.localStorage.getItem("username");
  var bg = document.getElementById("bg_input").value;
  var bg_show = "<h4 style='color: #001a66'>" + username + "'s Blood sugar is " + bg + ".</h4>"
  document.getElementById("bg_list").innerHTML = bg_show;
  firebase.database().ref("/").push({
    BG: bg,
    User_name: username
  });
  window.localStorage.setItem("Last BG log", bg);
}

function logout() {
  localStorage.removeItem("username");
  window.location = "index.html";
}

function homeScreen(){
  window.location = "table_of_contents.html"
}