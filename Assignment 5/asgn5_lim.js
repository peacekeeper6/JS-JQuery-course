$(document).ready(function() {

    $("#submitme").click(function() {
    var myFirst = $("#firstname").val();

    if (myFirst == '') {
        $("#errorfirst").text("Name is required!");
        return;
    }

});

    $("img").mouseover(function() {
        $(this).css("border-style", "outset");
    })
    $("img").mouseout(function() {
        $(this).css("border-style", '');
    })

    $("img").click(function() {
        $(this).attr("id", "currentimage");
        $("#currentimage").show("slow");

        var selectedVacation = $(this).attr("alt");

        $("#message").text(myFirst + " you want a " + selectedVacation + " vacation");
        // var imgVisible = $("img").css("display");

        // if (imgVisible == "none") {
        //     $(this).show("slow");
        // } else {
        //     $(this).hide("slow");
        // }
    })
    // $("img").mouseover(function() {
    //     if (imgVisible == "none") {
    //     $("img").css("border-style", "outset");
    //     } else {
    //         $("img").css("display");
    //     }
    // });
});