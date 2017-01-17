$(document).ready(function(){
    $(window).scroll(function (event) {
        var scrollFromTop = $(window).scrollTop();
        var navbarHeight = $(".navbar").height();
        
        if(scrollFromTop > navbarHeight) {
            $(".navbar").addClass('fixed');
        } else {
            $(".navbar").removeClass('fixed');
        }
    });
});
