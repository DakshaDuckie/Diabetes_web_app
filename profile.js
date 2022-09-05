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

function insert_data() {
    var profile_pic = localStorage.getItem("profile_pic");
    var username = localStorage.getItem("username");
    var last_bg = localStorage.getItem("Last BG log");
    var last_carb = localStorage.getItem("Last carb log");
    var last_insulin = localStorage.getItem("Last insulin calculated");
    document.getElementById("user_span").innerHTML="<h3>"+username+"</h3>";
    document.getElementById("bg_span").innerHTML="<h3>"+last_bg+"</h3>";
    document.getElementById("carb_span").innerHTML="<h3>"+last_carb+"</h3>";
    document.getElementById("insulin_span").innerHTML="<h3>"+last_insulin+"</h3>";
    document.getElementById("profie_pic").src= profile_pic;
}
insert_data();
function toPfp(){
    window.location="profile_pic.html"
}
function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}