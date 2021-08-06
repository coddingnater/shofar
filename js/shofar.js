
var listName = '';
var popClickerDiv = '';
var popCloserDiv = '';

$(document).ready(function(){
    init();
    //clickPop2(popClickerDiv,listName, popCloserDiv);
    clickAni(listName);
});


function init(){
    //popClickerDiv = $('aside.rightArea ul li div > span');
    //popCloserDiv = $('div.videoContainer > .btn_popClose');
    listName = "active";
}

// function clickPop2(popClickerDiv,listName, popCloserDiv){

//     $(popClickerDiv).click(function(){
//         var targetID = $(this).attr("data-popName");
//         $('#' + targetID).addClass(listName);
//         $('body,html').css({overflow:'hidden'});
//     });
    
//     $(popCloserDiv).click(function(){
//         $('.videoContainer').removeClass(listName);
//         $('body,html').css({overflow:''});
//     });
// }

function clickAni(listName){
    $clickActive = $('ul.sectionul li strong');

    $clickActive.click(function(){
        $(this).toggleClass(listName);
        
         $('div.paragrapy').toggleClass(listName);
         
     });

     //스트롱을 클릭하면 클릭된 개체에 클래스 부여하고 나머지 스트롱은 클래스 지운다 

        //$(this).toggleClass(listName);
        // $('div.paragrapy').toggleClass(listName);

        // if( $clickActive.attr('class') == 'active'){
        //     $clickActive.removeClass(listName);
        // }else if($clickActive.attr('class') != 'active'){
        //     $(this).addClass(listName);
        // }
}





