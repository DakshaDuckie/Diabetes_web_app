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
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                var pc = message_data["profile_pic"];
                console.log("pc = "+pc)
                var profile = '<img src="'+pc+'">';
                document.getElementById("img_db").innerHTML = profile;
                localStorage.setItem("profile_pic",pc);
                //End code
            }
        });
    })
};
getData();
Webcam.set({
    width: 450,
    height: 400,
    image_format: "png",
    png_quailty: 90
});
var camera = document.getElementById("webcam");
var picture = document.getElementById("image");
var username = localStorage.getItem("username");
 Webcam.attach(camera);
var user_name = window.localStorage.getItem("username");
 function capture(){
    Webcam.snap(function(data_uri){
        picture.innerHTML = '<img id="picture" src="'+data_uri+'">';
        localStorage.setItem('Profile',data_uri);
        firebase.database().ref(username).push({
            proflie_picture:data_uri
        });
    });
}
function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}

function profile(){
    window.location = "profile.html";
}
