var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var newPlanetArray = [];
function planet (element, index, array){
	newPlanetArray += '<div>' + element + '</div>';
}
planets.forEach(planet);
var el = document.getElementById("planets");
el.innerHTML = newPlanetArray;

// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalPlanets = planets.map(function(planet){
	return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log(capitalPlanets);
var planetsWCaps = document.getElementById("caps");
planetsWCaps.innerHTML = capitalPlanets;



// Use the filter method to create a new array that contains planets with the letter 'e'
function pickCaps (random) {
	return random.includes('e');
}
var planetsWithE = planets.filter(pickCaps);

var ePlanets = document.getElementById("array-e");
ePlanets.innerHTML = planetsWithE;



// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var sentence = words.reduce(function (a, b){return a + " " + b});
var saying = document.getElementById("sentence");
saying.innerHTML = sentence;
