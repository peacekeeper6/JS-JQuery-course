var $ = function (id) {
	return document.getElementById(id);
}
var beatlesArray = ""; //global declaration of array

var showList = function () {
    var beatlesArray = document.getElementsByTagName('img');

    for (i = 1; i <= beatlesArray.length; i++) {
        myBeatles += i + "." + beatlesArray[i].value + ",";
    }
    $("list").innerHTML = myBeatles;
}

$("john").border = "0px";
$("paul").border = "0px";
$("george").border = "0px";
$("ringo").border = "0px";

this.border = '4px';
this.style.color = 'yellow';

window.onload = function ()
{
    beatlesArray = new Array();
	$("showlist").onclick = showList;
}
