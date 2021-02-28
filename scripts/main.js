$(document).ready(() => {
    var game = { //Define game config
        score: 0,
        difficulty: $("#game_difficulty").val(),
        possibilities: $(".game-button").map((i, e) => { return $(e).attr("data-button"); }).get(),
        currentGame: [],
        playerGuesses: []
    };

    $("#high_score").text(localStorage.getItem(game.difficulty + "_mode") == null ? "0" : localStorage.getItem(game.difficulty + "_mode")); //Load saved high score
      
    function doFlash(id) { //Do flash animation
        $("[data-button='" + id + "']").addClass('flash');
        setTimeout(() => {
            $("[data-button='" + id + "']").removeClass('flash');
        }, 300);
    }
      
    function addScore() { //Add score
        game.score++; //Increase score by one
        
        game.currentGame.push(game.possibilities[(Math.floor(Math.random() * $(".game-button").length))]); //Push sequence randomly to array
        
        var i = 0; //Current number of moves
        var moves = setInterval(() => {
            doFlash(game.currentGame[i]); //Flash current button

            i++; //Increase number of moves by 1

            if (i >= game.currentGame.length) { //Check to see if number of moves is more than or equal to the saved number of moves
                clearInterval(moves);
                $("table").removeClass("disabled");
            }
        }, 600);

        game.playerGuesses = []; //Restart player guesses from previous rounds
    }
      
    
    $("#start").on("click", () => {
        $("#start").addClass("disabled");
        $("table").removeClass("disabled");

        game.currentGame = [];
        game.score = 0;

        addScore();
    });

    $(".game-button").on("click", (e) => {
        let currentButton = $(e.currentTarget).attr("data-button"); //Get clicked button

        game.playerGuesses.push(currentButton); //Push clicked button to player guesses

        if (game.playerGuesses[game.playerGuesses.length - 1] != game.currentGame[game.playerGuesses.length - 1]) { //Check to see if the last player guess was correct

            if (game.score > localStorage.getItem(game.difficulty + "_mode")) { //if the current score is higher than previous high score, update it
                localStorage.setItem(game.difficulty + "_mode", (game.score - 1));
                $("#high_score").text((game.score - 1));
            }

            $("#current_score").text("0");

            $("table").addClass("disabled");
            $("#start").removeClass("disabled");
        } else {
            var check = game.playerGuesses.length == game.currentGame.length;
            if (check) {
                if (game.score > localStorage.getItem(game.difficulty + "_mode")) { //if the current score is higher than previous high score, update it
                    localStorage.setItem(game.difficulty + "_mode", game.score);
                    $("#high_score").text(game.score);
                }
                $("#current_score").text(game.score);
                addScore();
            }
        }
    });
})