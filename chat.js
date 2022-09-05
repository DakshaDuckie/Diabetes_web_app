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
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                var likes = message_data["like"];
                var message = message_data["message"];
                var name = message_data["name"];
                var nametag = "<h4>" + name + " </h4>";
                var messagetag = "<h4 class='message_h4'>" + message + "</h4>";
                var liketag = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + likes + "' onclick ='updateLike(this.id)'>";
                var spantag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: " + likes + "</span> </button> <hr>";
                var row = nametag + messagetag + liketag + spantag;
                document.getElementById("output").innerHTML = row;
                //End code
            }
        });
    })
};
getData();
function updateLike(message_id) {
    console.log("when clicked on the button: " + message_id);
    var button_id = message_id;
    var likes = document.getElementById(button_id).value;
    var updatedLikes = Number(likes) + 1;
    console.log(updatedLikes);
    firebase.database().ref("/").child(message_id).update({
        like: updatedLikes
    });
}

function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}

function homeScreen() {
    window.location = "table_of_contents.html"
}

var user_name = localStorage.getItem("username");
function sendMessage() {
      var message = document.getElementById("message").value;
      firebase.database().ref("/").push({
            like: 0,
            message: message,
            name: user_name
      });
      document.getElementById("message").value = "";
}