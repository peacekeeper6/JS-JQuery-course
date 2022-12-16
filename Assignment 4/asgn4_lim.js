var $ = function(id) {
	return document.getElementById(id);
};

var beatlesArray;
var beatleString = "";
var processArray = function() {
	var counter = 1;
	for (var i = 0; i <= beatlesArray.length - 1; i++) {
		if (i !== beatlesArray.length - 1) {
			beatleString += counter + ". " + beatlesArray[i] + ", ";
		} else {
			beatleString += counter + ". " + beatlesArray[i];
		}
		counter++;
	}
	$("list").innerHTML = beatleString;
};

var loadFunction = function() {
	beatlesArray = [];

	$("john").onclick = function() {
		$("ringo").border = "0px";
		$("paul").border = "0px";
		$("george").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		beatlesArray.push("John");
	};
	$("paul").onclick = function() {
		$("john").border = "0px";
		$("ringo").border = "0px";
		$("george").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		beatlesArray.push("Paul");
	};
	$("george").onclick = function() {
		$("john").border = "0px";
		$("paul").border = "0px";
		$("ringo").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		beatlesArray.push("George");
	};
	$("ringo").onclick = function() {
		$("john").border = "0px";
		$("paul").border = "0px";
		$("george").border = "0px";
		this.border = '4px';
		this.style.color = 'yellow';
		beatlesArray.push("Ringo");
	};

	
	$("showlist").onclick = processArray;
};

window.onload = loadFunction;

