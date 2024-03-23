var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");

// Convert the first name and last name to uppercase
var upperFirstName = firstName.toUpperCase();
var upperLastName = lastName.toUpperCase();

// Concatenate the uppercase first name and last name
var completeName = upperFirstName + " " + upperLastName;

document.write(`Hello ${completeName}`);


var favPhone = prompt("Enter your favorate phone name")

document.write("My favorite phone is: " + favPhone )

var len = favPhone.length;

document.write("<br><br> Length of " + len)



var word = "Pakistani"

var index = word.indexOf('n')


document.write("<br><br><br>The index of 'n' is " + index)


var num = 35.35

var numStr = num.toString().replace('.','')

document.write("<br><br><br>" + numStr)


var userIn = prompt("write peanut here in any form of letters")


var uperCa = userIn.toUpperCase()

document.write(uperCa)


var userInp = prompt("write here")


var changeInt = userInp.charAt(0).toUpperCase() + userInp.slice(1).toLowerCase()


document.write(changeInt)


var myString = "4432"

var myNum = 4432;

document.write(myString + "<br><br><br>" + typeof myString + "<br><br><br>")

document.write(typeof myNum + "<br><br><br>")


var university = "University of Karachi"

var universityArray = university.split("")

document.write(universityArray.join("<br>"))