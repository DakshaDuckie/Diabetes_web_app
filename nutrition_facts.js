function homeScreen() {
	window.location = "table_of_contents.html"
}

function logout() {
	localStorage.removeItem("username");
	window.location = "index.html";
}

function getFacts() {

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '00e82d5195msh975e5d8276d44a9p146b76jsn1e9b95a76f28',
			'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
		}
	};
	var food = document.getElementById("food_input").value;
	fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=' + food, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
		document.getElementById("nutri_facts_para").innerHTML = "<h3> Facts:" + response.items.items[0]+ "</h3>"
		})
		.catch(err => console.error(err));
}

function api_response(){
	document.getElementById("nutri_facts_para").innerHTML = "<h3> Facts:" + Response + "</h3>";
}