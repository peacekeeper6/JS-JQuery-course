var firstName = "";
var lastName = "";
var startDate = "";
var signUpMessage = "";
var chosenPlan = "";  

var callback = function() 
	{
		setTimeout(function()
		{
			$("#feelingWindow").removeAttr("style").fadeIn();
		}, 100);
	}

$(document).ready(function() {
	
	$("#tabs").tabs();
	
	$("#datePicker").datepicker();

	$("#createAccount").click(function() {
		firstName = $("#firstName").val();
		lastName = $("#lastName").val();
		startDate = $("#datePicker").val();
		
		if (firstName == "")
		{
			$("#firstError").html("You must enter your first name");
		}
		else
		{
			$("#firstError").html("");
		}
		
		if (lastName == "")
		{
			$("#lastError").html("You must enter your last name");
		}
		else
		{
			$("#lastError").html("");
		}
	
		if (startDate == "")
		{
			$("#dateError").html("You must select a starting date");
		}
		else
		{
			$("#dateError").html("");
		}
		
		if (firstName != "" && lastName != "" && startDate !="")
		{
			signUpMessage = "<br><br>Success: " + firstName + " " + lastName + "<br>";
			signUpMessage += "Use the Start Date as your Password";  //concatenate message string
			$("#signUpError").html("");  //clear error message
			$("#signUpMessage").html(signUpMessage);
		}
		else 
		{
			$("#signUpError").html("Please fill out all info");
		}
	})
	
	
	$(".draggable").draggable(
		{cursor: "move"});
	
	$(".droppable").droppable({
		drop: function(event, ui) {
			if (ui.draggable.attr("id") == "greatPlan")
			{
				chosenPlan = "Great";
				$(this).addClass(
				"dropped").find("p").html("Great Plan Picked!");
			}
			if (ui.draggable.attr("id") == "poorPlan")
			{
				chosenPlan = "Poor";
				$(this).addClass(
				"dropped").find("p").html("Poor Plan Picked!");
			}
		}
	});
	$("#feelingClick").click(function() {
		var options = [];  
		
		if (chosenPlan == "")
		{
			$("#feelingText").html("I don't know");
			$("#feelingWindow").effect("bounce", options, 1000, callback);
		}
		
		if (chosenPlan == "Great")
		{
			$("#feelingText").html("Great!");	
			$("#feelingText").css("color", "Green");
			$("#feelingWindow").effect("blind", options, 1000, callback);
		}
		
		if (chosenPlan == "Poor")
		{
			$("#feelingText").html("My head hurts!");
			$("#feelingText").css("color", "Red");
			$("#feelingWindow").effect("shake", options, 1000, callback);
		}
	}); 
	
}); 