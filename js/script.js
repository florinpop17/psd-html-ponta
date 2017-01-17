$(document).ready(function(){
    var scrollFromTop = $(window).scrollTop();
    
    toggleScrolled();
    
    $(window).scroll(function (event) {
        scrollFromTop = $(window).scrollTop();
        toggleScrolled();
    });
    
    function toggleScrolled() {
        if(scrollFromTop > 40) {
            $(".navbar").addClass('scrolled');
        } else {
            $(".navbar").removeClass('scrolled');
        }
    }
    
});