var $ = function (id) {
	return document.getElementById(id);
}
var isValid = new Boolean(false); //global variable
var validateItems = function ()
{
    var addPatrons = function() {
        if (isValid) { //bool check
            $('myform').submit();
        }
        else {
            $('endmessage').value = "Patron Not Added!"
        }
    }
    var isValid = new Boolean(false); //initialize
	var myFirstName = $("firstname").value;
	var myLastName = $("lastname").value;
	var myEmail = $("email").value;
    var myCity = $("city").value;
    var myDonation = $("donation").value;

    if (myFirstName == '') {
        $('firstnameerror').innerHTML = "Enter first name";
    }
    if (myLastName == '') {
        $('lastnameerror').innerHTML = "Enter last name";
    }
    if (myEmail == '') {
        $('emailerror').innerHTML = "Enter Email";
    }
    if (myCity == '-') {
        $('cityerror').innerHTML = "Select a City from the list";
    }
    if (isNaN(myDonation) || myDonation == '') {
        $('donationerror').innerHTML = "Enter Amount";
    }
    if (!(myFirstName == '' || myLastName == '' || myEmail == '' || myCity == '' || myDonation == '' || isNaN(myDonation))) {
        var isValid = new Boolean(true); //bool
    }
    addPatrons();
}
var clearFields = function () {
    $("firstname").value = '';
    $("lastname").value = '';
    $("email").value = '';
    $("city").value = '-';
    $("donation").value = '';
}

window.onload = function ()
{
	$("addpatron").onclick = validateItems;
    $("clearfields").onclick = clearFields;

}

