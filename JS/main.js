$(document).ready(function(){
	$('.slider').slick({
        arrows:true,
        dots:true,
        adaptivHeight:true,
        speed:300,
        infinite:false,
        swipe:true,
        TouchMove:true,
        Waitforanimate:false,
        responsive:[
            {
                breakpoint:968,
                settings:{
                    arrows:false,
                }
            }

        ]
    })
    /*$('figma').click(function(event){
        $('slider').slick('goTo',0);

    })*/
    
    $('slider2').slick({
        arrows:false,
        dots:false,
        adaptivHeight:true,
        speed:1000,
        infinite:false,
        swipe:true,
        TouchMove:true,
        Waitforanimate:false,
        responsive:[
            {
                breakpoint:968,
                settings:{
                    arrows:false,
                }
            }

        ]
    })

    $('slider3').slick({
        dots:false,
    })
})

//Добавляем кнопку наверх с исчезновением

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    } else {
    btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    console.log(e);
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 5);
});

// скорсть scroll-behavior
/*
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
      } // End if
    });
    });
*/