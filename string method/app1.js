// Chap 21

// var allLower =
// userInput.toLowerCase ();


var cityName = "KarAchI"

// var cityNamecap = cityName.toLocaleUpperCase();

// document.write(cityNamecap)


var cityName = "KarAchI";
var citynamecom = cityName.toLowerCase();

var cityNamefir = citynamecom.charAt(0).toUpperCase() + citynamecom.slice(1);

document.write(cityNamefir);


// chap 22-25



var sameWords = "captain";
var startIndex = sameWords.indexOf("ap"); // Find the start index of "ap"
var endIndex = startIndex + "ap".length; // Calculate the end index

var want = sameWords.slice(0, startIndex) + sameWords.slice(endIndex);

document.write(want);

