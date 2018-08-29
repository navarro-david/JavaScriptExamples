$(document).ready(function(){
    $('#greet-hello').show();
    $('#greet-goodbye').hide();

    $('#btn1').click(function(){
        $('#greet-hello').toggle();
        $('#greet-goodbye').toggle();
    });

    $('#notice-me1').hide();
    $('#notice-me2').hide();

});

function noticeMe(selector){
    $(selector).slideToggle();
};