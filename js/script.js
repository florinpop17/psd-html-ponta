$(document).ready(function(){
    //Nav icon
    $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
        $(".navbar").addClass('scrolled');
	});
    
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
    var arrText = ['..', '...', 'leistungsfähig', 'leistungwillig', 'pragmatisch', 'commited', 'strategisch', 'beweglich', 'kreativ', 'schnell', 'oho' ];
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
        //if it's not mobile
        var wWidth = $(window).width();
        //Switching off parallax on mobile
        if(wWidth > 768){
            var parallax = $(".parallax");

            //Subtract from parallax top
            var subtractTop = 80;

            parallax.css("background-position", "center "+ (scrollFromTop / 8 - subtractTop) +"px");


            var parallax_sub = $(".parallax-sub");
            parallax_sub.each(function(idx){

                var topOffset = $(this).offset().top;
                //var wHeight = $(window).height();
                //var imgHeight = $(this).height() * 4;

                var calc = (scrollFromTop - topOffset) / 25 - 60;

                $(this).css("background-position", "center "+ calc +"px");
            });
        }
    }
    
    //Skills on click
    $(".skills li a").click(function(e){
        var cat_info = $("#category-info");
        var holding_li = $(this).parent().parent().parent();
        
        //Reset to default state
        reset_cat_info();
        
        //Add active class
        $(this).addClass("active");
        
        //Prevent default hop on top effect
        e.preventDefault();
        
        //Add content to the category-info div with AJAX...
        
        //Position the category-info div in the corresponding UL
        holding_li.append(cat_info);
        
        //Get height of the category-info div
        var cat_info_height = cat_info.height() + 150;
        
        //Margin bottom to the holding li by the height of the div
        holding_li.css("margin-bottom", cat_info_height+"px");
        
        //Show the category-info div
        cat_info.addClass("showing");
        
        
        var offset = -50;
        $('html, body').animate({
            scrollTop: cat_info.offset().top + offset
        }, 500);
        
    });
    
    $("#category-info .btn-close").click(function(e){
        e.preventDefault();
        
        var offset = -150;
        var currentActive = $(".skills li a.active");
        
        reset_cat_info();
        
        $('html, body').animate({
            scrollTop: currentActive.offset().top + offset
        }, 500);
    });
    
    function reset_cat_info() {
        //Hide category-info div if it was showing
        $("#category-info").removeClass("showing"); 
        
        //Remove margin-bottom if it is any
        $(".skills > ul > li").css("margin-bottom", "0");
        
        //Remove active class
        $(".skill-link").removeClass("active");
    }
});