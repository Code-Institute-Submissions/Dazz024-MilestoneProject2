$(document).ready(() => {
    var game = { 
        score: 0,
        difficulty: $("#game_difficulty").val(),
        possibilities: $(".game-button").map((i, e) => { return $(e).attr("data-button"); }).get(),
        currentGame: [],
        playerGuesses: []
    };

    $("#high_score").text(localStorage.getItem(game.difficulty + "_mode") == null ? "0" : localStorage.getItem(game.difficulty + "_mode")); 
      
    function doFlash(id) { 
        $("[data-button='" + id + "']").addClass('flash');
        setTimeout(() => {
            $("[data-button='" + id + "']").removeClass('flash');
        }, 300);
    }
      
    function addScore() { 
        game.score++; 
        
        game.currentGame.push(game.possibilities[(Math.floor(Math.random() * $(".game-button").length))]); 
        
        var i = 0; 
        var moves = setInterval(() => {
            doFlash(game.currentGame[i]); 

            i++; 

            if (i >= game.currentGame.length) { 
                clearInterval(moves);
                $("table").removeClass("disabled");
            }
        }, 600);

        game.playerGuesses = []; 
    }
      
    
    $("#start").on("click", () => {
        $("#start").addClass("disabled");
        $("table").removeClass("disabled");

        game.currentGame = [];
        game.score = 0;

        addScore();
    });

    $(".game-button").on("click", (e) => {
        let currentButton = $(e.currentTarget).attr("data-button"); 

        game.playerGuesses.push(currentButton); 

        if (game.playerGuesses[game.playerGuesses.length - 1] != game.currentGame[game.playerGuesses.length - 1]) { 

            if (game.score > localStorage.getItem(game.difficulty + "_mode")) { 
                localStorage.setItem(game.difficulty + "_mode", (game.score - 1));
                $("#high_score").text((game.score - 1));
            }

            $("#current_score").text("0");

            $("table").addClass("disabled");
            $("#start").removeClass("disabled");
            alert("Oops missed that one!")
        } else {
            var check = game.playerGuesses.length == game.currentGame.length;
            if (check) {
                if (game.score > localStorage.getItem(game.difficulty + "_mode")) { 
                    localStorage.setItem(game.difficulty + "_mode", game.score);
                    $("#high_score").text(game.score);
                }
                $("#current_score").text(game.score);
                addScore();
            }
        }
    });
})