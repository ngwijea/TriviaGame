window.onload = function() {
    $(".questions").hide();
    $(".endResults").hide()

};

var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var totalTime = 60000





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

    // run();
    // question1: Who wrote “Game of Thrones”?
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + answers[0].answersArray[0] + "</label>"
    + "<input type='radio' name='answer1' value='1'>" + "<label>" + answers[0].answersArray[1] + "</label>"
    + "<input type='radio' name='answer1' value='2'>" + "<label>" + answers[0].answersArray[2] + "</label>"
    + "<input type='radio' name='answer1' value='3'>" + "<label>" + answers[0].answersArray[3] + "</label><br><br>"
);

    // question2: How Many Legitimate children do Ned and Catelyn Stark have?
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + answers[1].answersArray[0] + "</label>"
    + "<input type='radio' name='answer2' value='1'>" + "<label>" + answers[1].answersArray[1] + "</label>"
    + "<input type='radio' name='answer2' value='2'>" + "<label>" + answers[1].answersArray[2] + "</label>"
    + "<input type='radio' name='answer2' value='3'>" + "<label>" + answers[1].answersArray[3] + "</label><br><br>"
);

    // question3: What is Robert Baratheon’s weapon of choice?
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + answers[2].answersArray[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + answers[2].answersArray[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + answers[2].answersArray[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + answers[2].answersArray[3] + "</label><br><br>"
    );

    // question4: Who goes by the nickname “Littlefinger”?
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + answers[3].answersArray[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + answers[3].answersArray[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + answers[3].answersArray[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + answers[3].answersArray[3] + "</label><br><br>"
    );

        // question5: Why is Daenerys called Khaleesi?
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + answers[4].answersArray[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + answers[4].answersArray[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + answers[4].answersArray[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + answers[4].answersArray[3] + "</label><br><br>"
    );

})



function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

