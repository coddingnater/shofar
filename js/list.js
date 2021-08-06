$(document).ready(function(){
    var listClicker = $('.artist ul li .clicker');
    var listTarget = $('.artist ul li');
    var listName = 'active';

    toggleActive(listClicker,listTarget, listName);
});

function toggleActive(clicker, target, className){
    var num = 0;
    $(target).click(function(){
        num++;
        if( 1 >= num ){
            $(this).addClass(className);
        }else if( 2 >= num ){
            $(this).removeClass(className);
            num = 0;
        }
    });
    $(clicker).click(function(){
        $(target).removeClass(className);
        console.log($(target));
    });
}
