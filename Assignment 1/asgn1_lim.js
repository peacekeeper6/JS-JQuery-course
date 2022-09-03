var $ = function (id) {
	return document.getElementById(id);
}

var displayMessage = function ()
{
	var myFirstName = $("firstname").value;
	var myAge = $("age").value;
	var hours = $("hours").value;
	
	var myAgeInt = parseInt(myAge);
	var hoursInt = parseInt(hours);
	
	var num = myAgeInt * (hoursInt/24);
	
	// Can also do it this way
	// var num = Math.round(myAgeInt * (hoursInt/24))

	var roundedNum = Math.round(num);
	
	var myText = "Hi " + myFirstName + ". You have slept " + roundedNum + " years of your life away."
	
	$("mymsg").innerHTML = myText;
}

window.onload = function ()
{
	$("mybutton").onclick = displayMessage;
}

