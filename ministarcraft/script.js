var hp = 3;
$('#drone').click(function(){
    $('#spit').fadeIn();
    $('#spit').animate({left: '+=230'});
    $('#spit').fadeOut(function(){
        hp -= 1;
        $('#hp').text("HP: " + hp);
        if(hp == 0){
            $('#bunker').fadeOut(function(){
                $('#over').fadeIn();
            });
        }
    });
    $('#spit').css({left: '150px'});
});