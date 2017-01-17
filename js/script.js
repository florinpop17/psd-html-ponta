$(document).ready(function(){
    $(window).scroll(function (event) {
        var scrollFromTop = $(window).scrollTop();
        var navbarHeight = $(".navbar").height();
        
        if(scrollFromTop > navbarHeight) {
            $(".navbar").css("position", "fixed");
        } else {
            $(".navbar").css("position", "static");
        }
    });
});
