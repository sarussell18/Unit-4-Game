
var targetNumber = 0;


var crystalNumber = [Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1)];

var images = ["assets/images/crystal 1.jpg", "assets/images/crystal 2.jpg", "assets/images/crystal 3.jpg", "assets/images/crystal 4.jpg"];

var crystalImage;

for (var i = 0; i < crystalNumber.length; i++) {
    crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", images[i]);
    crystalImage.attr("data-crystalvalue", crystalNumber[i]);
    $("#crystals").append(crystalImage);
};

var totalScore = 0;

var wins = 0;

var losses = 0;


function resetGame() {

   
    totalScore = 0
    $("#total-score").html(totalScore);

    
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#target-number").html(targetNumber);

    crystalNumber = [Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1)];
    console.log(crystalNumber);
    for (var i = 0; i < crystalNumber.length; i++) {    
        crystalImage.attr("data-crystalvalue", crystalNumber[i]);

    }

};


resetGame();


$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore = totalScore + crystalValue;
    $("#total-score").html(totalScore);

    if (totalScore === targetNumber) {
        wins++;
        $("#wins").html(wins);
        $("#wins-losses").text("You won!");
        resetGame();
    }

    else if (totalScore >= targetNumber) {
        losses++;
        $("#losses").html(losses);
        $("#wins-losses").html("You lost!");
        resetGame();
    }

});


