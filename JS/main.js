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

