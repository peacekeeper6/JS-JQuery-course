var $ = function (id) {
	return document.getElementById(id);
}

var processInfo = function ()
{
	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
	var myPets = $("pets").value;
    var truePets = parseInt(myPets);

    var today = new Date();

    var todayMonth = today.getMonth() + 1;
    var todayDay = today.getDate();
    var todayYear = today.getFullYear();

    var todayFormatted = todayMonth + "-" + todayDay + "-" + todayYear;

    if (myFirstName == '') {
        $('firstnamemsg').innerHTML = "Please enter first name";
        result == '';
    }
    if (myLastName == '') {
        $('lastnamemsg').innerHTML = "Please enter last name";
        result == '';
    }
    if (myPets == '') {
        $('petsmsg').innerHTML = "Please enter number of pets";
        result == '';
    }

    var pets = "";
	for (i = 1; i <= truePets; i++) {
        var myPetID = 'pet' + i;
        var myPetName = $(myPetID).value;
        pets += "Your Pet #" + i + " is named " + myPetName + ". ";
    }

    if (!(myFirstName == '' || myLastName == '' || myPets == '')) { //doesn't print this unless all 3 fields are filled out
        var result = "Hi, your name is " + myLastName + ", " + myFirstName + ", and today's date is " + todayFormatted + ". " + pets;
    }
    $("message").innerHTML = result;
	
}

window.onload = function ()
{
	$("mybutton").onclick = processInfo;
}

