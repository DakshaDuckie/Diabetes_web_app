var firebaseConfig = {
    apiKey: "AIzaSyBUetNhko9gcZlQGYgArttTQq5-CfVGf3M",
    authDomain: "diabetes-manager-9f3a9.firebaseapp.com",
    databaseURL: "https://diabetes-manager-9f3a9-default-rtdb.firebaseio.com",
    projectId: "diabetes-manager-9f3a9",
    storageBucket: "diabetes-manager-9f3a9.appspot.com",
    messagingSenderId: "825581173159",
    appId: "1:825581173159:web:0e0e8a18e1bc08d9459e82",
    measurementId: "G-QF8F6R8WS1"
};
firebase.initializeApp(firebaseConfig);

function log_in() {
    var username = document.getElementById("user_name").value;
    window.localStorage.setItem("username", username);
    firebase.database().ref("/").child(username).update({
        User_id:"user profile named "+ username +" created"
    });
    window.location = "table_of_contents.html";
}