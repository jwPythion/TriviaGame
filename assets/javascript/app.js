

//set counter to one minute 
var count = 60


var correctAnswers = 0

var wrongAnswers = 0

var noAnswer = 0



$(document).ready(function(){
    //keeping the ending div hidden from the beginning of the game
    $("#end_wrapper").hide();

    window.scrollTo(0,500);


    $("#game_wrapper").show();

    startCountdown();
    return;


});




function countdown(){
    count--;


    $('#timer_number').html(count + " Seconds");


    $("#done_button").on("click", function(){

        //times up and countdown should stop....
        count = 0; 
        return;

        });

        if(count == -1){

            timeUp();
            $("#game_wrapper").hide();

        }
    
}

//setting the countdown
function startCountdown(){

    setInterval(countdown, 1000);

}










