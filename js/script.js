$(document).ready(function(){
    $(window).scroll(function (event) {
        var scrollFromTop = $(window).scrollTop();
        var navbarHeight = $(".navbar").height();
        
        if(scrollFromTop > navbarHeight) {
            $(".nav-container").addClass('fixed');
        } else {
            $(".nav-container").removeClass('fixed');
        }
    });
});
