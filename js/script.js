$(document).ready(function(){
    
    //Check scroll and add border to the nav
    var scrollFromTop = $(window).scrollTop();
    
    toggleScrolled();
    parallax();
    
    
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
    
    //Parallax effect calculation
    function parallax() {
        var parallax = $(".parallax");
        parallax.css("background-position", "center "+ (scrollFromTop / 8 - 80) +"px");
        
        
        var parallax_sub = $(".parallax-sub");
        parallax_sub.each(function(idx){
            
            var topOffset = $(this).offset().top;
            //var wHeight = $(window).height();
            //var imgHeight = $(this).height() * 4;
            var calc = (scrollFromTop - topOffset) / 25 - 60;

            $(this).css("background-position", "center "+ calc +"px");
        });
    }
    
    //Skills on click
    $(".skills li a").click(function(e){
        
        //Add/Change active class
        $(".skill-link").removeClass("active");
        $(this).addClass("active");
        
        //Prevent default hop on top effect
        e.preventDefault();
        
        //Add content to the category-info div with AJAX...
        
        //Position the category-info div in the corresponding UL
        
        //Get height of the category-info div
        var cat_info_height = $("#category-info").height();
        
        //Margin bottom to the holding li by the height of the div
        
        //Parent 1 is li, parent 2 is ul, parent 3 is li as following:
        //ul > li > ul > li > a
        $(this).parent().parent().parent().css("margin-bottom", cat_info_height+"px");
        
        //Show the category-info div
        $("#category-info").css("display", "block");
    });
});