$(document).ready(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://type.fit/api/quotes",
        "method": "GET"
    }
    $.ajax(settings).done(function(response) {
        data = JSON.parse(response);




    });

    $('.header').height($(window).height());
    let number = 0;
    let quotAnim = setInterval(() => {
        $(".description p").fadeOut(3000, () => {
            let indquot = Math.floor(Math.random() * 101);

            let quote = data[indquot]["text"];
            $(".description p").html(quote);
        }).fadeIn(3000);

    }, 100);





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







        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position




    }


    $('.slicking-card').slick({
        slidesToShow: 3,
        swipeToSlide: true,
        swipe: true,
        touchMove: true,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: true,
        nextArrow: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });
});



$(window).load(() => {
    $(".black-screen").animate({ opacity: '0' }, 1000, () => {
        $(".black-screen").addClass("black-screen-off");
    })
});