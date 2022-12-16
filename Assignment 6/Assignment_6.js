$(document).ready(function() {
	var firstName = "";
	var lastName = "";
	var gender = "";
	var genderFull = "";
	var yearsExperience = "";
	var message_1 = "";
	var message_2 = "";
	var message_3 = "";
	
	$("#mysubmit").click(function() {
		firstName = $("#first_name").val();
		lastName = $("#last_name").val();
		gender = $("input[name='gender']:checked").val();
		yearsExperience = $("#years").val();
	
		if (firstName == "")
		{
			$("#first_error").html("You must enter a first name");
			$("#first_name").focus();
		}

		else if (firstName != "" && lastName == "")
		{
			$("#first_error").html("");
			$("#last_error").html("You must enter a last name");
			$("#last_name").focus();
		}
		
		else if (firstName != "" && lastName != "" && gender == null)
		{
			$("#first_error").html("");
			$("#last_error").html("");
			$("#gender_error").html("You must choose a gender")
		}
		
		else if (firstName != "" && lastName != "" && gender != null && yearsExperience == "-")
		{
			$("#first_error").html("");
			$("#last_error").html("");
			$("#gender_error").html("");
			$("#years_error").html("You must choose select a number")
		}
		
		else if (firstName != "" && lastName != "" && gender != null && yearsExperience != "-")
		{
			$("#first_error").html("");
			$("#last_error").html("");
			$("#gender_error").html("");
			$("#years_error").html("");
			
			if (gender == "M")
			{
				genderFull = "Male";
			}
			if (gender == "F")
			{
				genderFull = "Female";
			}
			
			$("#message").css("background-color", "yellow");
			
		
			message_1 = "<h2>Employment Stats for " + firstName + " " + lastName + "</h2>";
			message_2 = "<p>You are a: " + genderFull + "</p>";
			message_3 = "<p>You have: " + yearsExperience + " years experience</p>";
			$("#message").html(message_1 + message_2 + message_3);
		}
	}) 	
}) 