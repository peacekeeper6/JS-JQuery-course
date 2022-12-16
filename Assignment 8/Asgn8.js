$(document).ready(function() {
	$("#loginButton").click(function() {
		var userID = $("#userID").val();
		var userPassword = $("#userPassword").val();
		
		var data = userID + "|" + userPassword;
		
		$.post(
			"https://profperrytest.com/AJAXPHP/validate_logon.php",
			'data='+data,
			function(result){
				$("#endMessage").html(result);
			}
		);
		
	})

}) 