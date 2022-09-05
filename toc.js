username();
function username() {
    var username = window.localStorage.getItem("username");
    document.getElementById("username").innerHTML = "Welcome " + username + "!";
}
function bgLogs() {
    window.location = "bgLogs.html";
}

function carbLogs() {
    window.location = "carbLogs.html";
}

function chat() {
    window.location = "chat.html";
}

function insulinCalc() {
    window.location = "insulinCalc.html";
}

function nutriFacts(){
    window.location = "nutrition_facts.html";
}

function profile(){
    window.location = "profile.html";
}

function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}

