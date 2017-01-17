$(document).ready(function(){
    var scrollFromTop = $(window).scrollTop();
    var navbarHeight = $(".navbar").height();
    
    toggleScrolled();
    
    $(window).scroll(function (event) {
        scrollFromTop = $(window).scrollTop();
        toggleScrolled();
    });
    
    function toggleScrolled() {
        if(scrollFromTop > navbarHeight) {
            $(".navbar").addClass('scrolled');
        } else {
            $(".navbar").removeClass('scrolled');
        }
    }
    
});