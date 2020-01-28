window.onload = function() {
    $(".questions").hide();
    $(".endResults").hide();

};

var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var totalTime = 60





var answers = [
    // question1: Who wrote “Game of Thrones”?
    {answersArray: ["George R.R. Martin", "George Orwell", "George Smith","Georges Soros"],answer: 0},
    // question2: How Many Legitimate children do Ned and Catelyn Stark have?
    {answersArray: ["4", "5", "6","7"],answer: 1},
    // question3: What is Robert Baratheon’s weapon of choice?
    {answersArray: ["Sword", "Mace", "Warhammer","Crossbow"],answer: 2},
    // question4: Who goes by the nickname “Littlefinger”?
    {answersArray: ["Lord Varys", "Maester Pycelle", "Ser Ilyn Payne","Petyr Baelish"],answer: 3},
    // question5: Why is Daenerys called Khaleesi?
    {answersArray: ["It is her nickname", "it is her title by marriage", "It is Dothraki for Mother","It was a name her brother made up as kids"],answer: 1},

]

$(".startGame").on("click", function() {

    $(this).hide();
    $(".questions").show();

    $("#timeDisplay").html("<h2>Time Remaining: 60 Seconds</h2>");

    run();

    // question1: Who wrote “Game of Thrones”?
    $("#answer1").html("<input type='radio' name='answer1' value='correct'>" + "<label>" + answers[0].answersArray[0] + "</label>"
    + "<input type='radio' name='answer1' value='wrong'>" + "<label>" + answers[0].answersArray[1] + "</label>"
    + "<input type='radio' name='answer1' value='wrong'>" + "<label>" + answers[0].answersArray[2] + "</label>"
    + "<input type='radio' name='answer1' value='wrong'>" + "<label>" + answers[0].answersArray[3] + "</label><br><br>"
);

    // question2: How Many Legitimate children do Ned and Catelyn Stark have?
    $("#answer2").html("<input type='radio' name='answer2' value='wrong'>" + "<label>" + answers[1].answersArray[0] + "</label>"
    + "<input type='radio' name='answer2' value='correct'>" + "<label>" + answers[1].answersArray[1] + "</label>"
    + "<input type='radio' name='answer2' value='wrong'>" + "<label>" + answers[1].answersArray[2] + "</label>"
    + "<input type='radio' name='answer2' value='wrong'>" + "<label>" + answers[1].answersArray[3] + "</label><br><br>"
);

    // question3: What is Robert Baratheon’s weapon of choice?
    $("#answer3").html("<input type='radio' name='answer3' value='wrong'>" + "<label>" + answers[2].answersArray[0] + "</label>"
        + "<input type='radio' name='answer3' value='correct'>" + "<label>" + answers[2].answersArray[1] + "</label>"
        + "<input type='radio' name='answer3' value='wrong'>" + "<label>" + answers[2].answersArray[2] + "</label>"
        + "<input type='radio' name='answer3' value='wrong'>" + "<label>" + answers[2].answersArray[3] + "</label><br><br>"
    );

    // question4: Who goes by the nickname “Littlefinger”?
    $("#answer4").html("<input type='radio' name='answer4' value='wrong'>" + "<label>" + answers[3].answersArray[0] + "</label>"
        + "<input type='radio' name='answer4' value='wrong'>" + "<label>" + answers[3].answersArray[1] + "</label>"
        + "<input type='radio' name='answer4' value='wrong'>" + "<label>" + answers[3].answersArray[2] + "</label>"
        + "<input type='radio' name='answer4' value='correct'>" + "<label>" + answers[3].answersArray[3] + "</label><br><br>"
    );

        // question5: Why is Daenerys called Khaleesi?
    $("#answer5").html("<input type='radio' name='answer5' value='wrong'>" + "<label>" + answers[4].answersArray[0] + "</label>"
        + "<input type='radio' name='answer5' value='correct'>" + "<label>" + answers[4].answersArray[1] + "</label>"
        + "<input type='radio' name='answer5' value='wrong'>" + "<label>" + answers[4].answersArray[2] + "</label>"
        + "<input type='radio' name='answer5' value='wrong'>" + "<label>" + answers[4].answersArray[3] + "</label><br><br>"
    );

    $(".done").on("click", function() {
        tally();
        finalResults()
    });

});

// Scoring functions

function tally() {
    var userResponse1 = $("input[type=radio]:checked").val();
    var userResponse2 = $("input[type=radio]:checked").val();
    var userResponse3 = $("input[type=radio]:checked").val();
    var userResponse4 = $("input[type=radio]:checked").val();
    var userResponse5 = $("input[type=radio]:checked").val();


    if (userResponse1 === undefined) {
        unanswered++;
    }
    else if (userResponse1 === "correct") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    if (userResponse2 === undefined) {
        unanswered++;
    }
    else if (userResponse2 === "correct") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    if (userResponse3 === undefined) {
        unanswered++;
    }
    else if (userResponse3 === "correct") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    if (userResponse4 === undefined) {
        unanswered++;
    }
    else if (userResponse4 === "correct") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    if (userResponse5 === undefined) {
        unanswered++;
    }
    else if (userResponse5 === "correct") {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
    
}

function finalResults () {
    $(".wholeGame").hide();

    $(".endResults").show();

    $("#quizOver").html("<h1> The Quiz is Over</h1>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);


}

// Timer functions

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}


function decrement() {
    
    totalTime--;
    $("#timeDisplay").html("<h2>Time Remaining: " + totalTime + " Seconds</h2>" + "<br>");

    if (totalTime === 0) {

        stop();
        tally();
        finalResults();

    }
}

