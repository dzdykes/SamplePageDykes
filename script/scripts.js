$(document).ready(function () {
    $("li").hide();
    $(".navHeader").mouseenter(function () {
        $(this).css("color", "yellow")
        $("li").slideDown();
    });
    $("nav").mouseleave(function () {
        $(".navHeader").css("color", "white")
        $("li").slideUp();
    });
});