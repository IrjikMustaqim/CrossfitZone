$(document).ready(function() {
    $(function() {
        $('.accordion').accordion();
    });



    window.onscroll = function() {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }


        if (window.pageYOffset >= 200) {
            $(".navbar").addClass("navbar-on");

        } else {
            $(".navbar").removeClass("navbar-on");
        }

    }



});

$(window).load(() => {
    $(".black-screen").animate({ opacity: '0' }, 1000, () => {
        $(".black-screen").addClass("black-screen-off");
    })
});