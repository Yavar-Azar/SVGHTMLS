$(document).ready(function() {
    $("div").click(function() {
        $(this).hide();
    });
    $("#myid").hover(function() {
        $(this).text("CHANGE TEXT");
        $(this).css({
            "width": "600",
            "height": "200"
        });
    }, function() {
        $(this).text("OLD TEXT");
    });
    var count = 0;
    $("#but1").click(function() {
        count++;
        if (count % 2 == 1) {
            $("#dftres").show();
            $("#but1").text("Hide");
        } else {
            $("#dftres").hide();
            $("#but1").text("SHOW");
        }
        $("#myprint").text(count)
    });
});