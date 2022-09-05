function homeScreen() {
  window.location = "table_of_contents.html"
}

function logout() {
  localStorage.removeItem("username");
  window.location = "index.html";
}

function calcClick(){
  var carb_amt = document.getElementById("carb_input").value;
  var ratio = document.getElementById("ratio_input").value;
  var current_bg = document.getElementById("rn_bg_input").value;
  var target_bg = document.getElementById("target_bg_input").value;
  var correct_factor = document.getElementById("correction_factor_input").value;
  var insulin_dose = carb_amt / ratio;
  var bg_dose = (current_bg - target_bg) / correct_factor;
  var total_dose = Math.round(insulin_dose + bg_dose);
  document.getElementById("insulin_result").innerHTML = "<h4>"+total_dose+"U</h4>"; 
  window.localStorage.setItem("Last insulin calculated", total_dose);
}