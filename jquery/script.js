//$(document).ready(function () {
//    console.log("ready!")
//});

$(function () {
    $(".navbar-toggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#bs-navbar-collapse-1").collapse('hide');
        }
    });
});
