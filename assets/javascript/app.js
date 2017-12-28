var correctAnswers = 0
var wrongAnswers = 0
var unansweredQuestions = 0
var timerCount = 11
var timer

initializeTimer = function() {
    timer = setInterval(decrement, 1000);
}

function decrement() {
    timerCount--
    $("#timerbox").html(timerCount);
    if (timerCount === 0) {
        stop();
        alert("Time up!")
    }
}

function stop() {
    clearInterval(timer);
    timerCount = 11;
}






$("#startgame").on("click", function(){
    $("#questionbox").html("<h1>This is the first question!</h1>");
    var answerForm = $("<form></form>");
    answerForm.append('<input type="radio" name="answers" value="Answer1" checked> Answer 1<br>');
    answerForm.append('<input type="radio" name="answers" value="Answer2"> Answer 2<br>');
    answerForm.append('<input type="submit" value="Submit">');
    $("#answerbox").html(answerForm);
    initializeTimer();
});

