$(document).ready(function(){
    
    //Check scroll and add border to the nav
    var scrollFromTop = $(window).scrollTop();
    
    toggleScrolled();
    
    $(window).scroll(function (event) {
        scrollFromTop = $(window).scrollTop();
        toggleScrolled();
        
        parallax();
    });
    
    function toggleScrolled() {
        if(scrollFromTop > 40) {
            $(".navbar").addClass('scrolled');
        } else {
            $(".navbar").removeClass('scrolled');
        }
    }
    
    //Dynamic text on index header
    var arrText = ['.', '..', '...', 'leistungsfähig', 'leistungwillig', 'pragmatisch', 'commited', 'strategisch', 'beweglich', 'kreativ', 'schnell', 'oho' ];
    var arrIndex = 0;
    
    var changingText = setInterval(function(){
        if(arrIndex < arrText.length) {
            
            $("#added_text").html(arrText[arrIndex]);
            
            arrIndex++;
        } else {
            clearInterval(changingText);
        }
    }, 500);
    
    
    function parallax() {
        var parallax_2 = $(".parallax-2");
        parallax_2.css("background-position", "center "+ (-scrollFromTop / 2) +"px");
    }
});