$(document).ready(function(){
    var scrollFromTop = $(window).scrollTop();
    var navbarHeight = $(".navbar").height();
    
    toggleFixed();
    
    $(window).scroll(function (event) {
        scrollFromTop = $(window).scrollTop();
        toggleFixed();
    });
    
    function toggleFixed() {
        if(scrollFromTop > navbarHeight) {
            $(".navbar").addClass('fixed');
        } else {
            $(".navbar").removeClass('fixed');
        }
    }
    
});