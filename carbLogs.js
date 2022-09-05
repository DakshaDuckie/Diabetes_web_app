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

function addCarbs() {
  var username = window.localStorage.getItem("username");
  var carbs = document.getElementById("carbs_input").value;
  var carb_show = "<h4 style='color: #001a66'>" + username + "'s carb intake is " + carbs + ".</h4>";
  document.getElementById("carb_list").innerHTML = carb_show;
  firebase.database().ref("/").push({
      Carbs: carbs,
      User_name: username
    });
    window.localStorage.setItem("Last carb log", carbs);
}

function logout() {
  localStorage.removeItem("username");
  window.location = "index.html";
}

function homeScreen(){
  window.location = "table_of_contents.html"
}
