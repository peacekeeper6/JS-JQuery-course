var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function ()
{
	var myFirstName = $("firstname").value;
	var myAge = $("age").value;
	
	var myAgeInt = parseInt(myAge);
	
	var myTrueAge = myAgeInt + 10;
	
	var myText = "Hi there, " + myFirstName + "you are not " + myAge + " but actually " + myTrueAge
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;
}