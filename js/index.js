$(document).ready(function(){
    mouseW();
    clickOn();
    toggleActive2();
});

function clickOn(){
    var $click = $('nav.quickMenu ul li');
    
    $click.click(function(){
        var idx = $(this).index() + 1;
        var target = $('section.main0' + idx );
        var SmainTop = target.offset().top;
        $(this).addClass('on').siblings().removeClass('on');

        $('html,body').stop().animate({ scrollTop : SmainTop });
        

    });
}
function mouseW(){
    var $contents = $('body.index > section');

    $(window).scroll(function(){

        $contents.each(function(){
            var idx = $(this).index();

            if($(this).offset().top <= $(window).scrollTop()){

                $(this).addClass('active');

                $('nav.quickMenu ul li').eq(idx-2).addClass('on').siblings().removeClass('on');

            }

        });
        
    });

}
function toggleActive2(){
    btn = $('section.main01 div.main01foot ul li:first-child');
    btn2 = $('section.main01 div.main01foot ul li:last-child');
    $(btn).click(function(){
        $("body").addClass('red');
    });
    $(btn2).click(function(){
        $("body").removeClass('red');
    });
}