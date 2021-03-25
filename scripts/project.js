playerOutput = document.getElementById('player-output');
playerRoundScore = document.getElementById('player-round');
playerTotal = document.getElementById('player-total');

computerOutput = document.getElementById('computer-output');
computerRoundScore = document.getElementById('computer-round');
computerTotal = document.getElementById('computer-total');

rollBtn = document.getElementById('start');
restartBtn = document.getElementById('restart');
playAgain = document.getElementById('play-again');


results = document.getElementById('results');
let rollCount = 0;

class Player {
    constructor(name, roundScore, total) {
        this.name = name;
        this.roundScore = roundScore;
        this.total = total;
    }
}

    Player.prototype.roll = function() {
    let roll = 0;
    roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

player = new Player('Ali', 0, 0);
computer = new Player('Computer', 0, 0);

rollBtn.addEventListener('click', function () {
    playerRoundScore.innerHTML = 'Score this round: ';
    computerRoundScore.innerHTML = 'Score this round: ';
    playerRoll1 = player.roll();
    playerRoll2 = player.roll();

    computerRoll1 = computer.roll();
    computerRoll2 = computer.roll();


    if (playerRoll2 == 1) {
        player.roundScore = 0;
    } else if (playerRoll1 == playerRoll2) {
        player.roundScore = playerRoll1 * playerRoll2;
    } else {
        player.roundScore = playerRoll1 + playerRoll2;
    }
    playerOutput.innerHTML = `You rolled: ${playerRoll1} and ${playerRoll2}`;
    playerRoundScore.innerHTML += (player.roundScore);
    player.total += player.roundScore;
    playerTotal.innerHTML = `Total score: ${player.total}`;

    if (computerRoll2 == 1) {
        computer.roundScore = 0;
    } else if (computerRoll1 == computerRoll2) {
        computer.roundScore = computerRoll1 * computerRoll2;
    } else {
        computer.roundScore = computerRoll1 + computerRoll2;
    }
    computerOutput.innerHTML = `You rolled: ${computerRoll1} and ${computerRoll2}`;
    computerRoundScore.innerHTML += (computer.roundScore);
    computer.total += computer.roundScore;
    computerTotal.innerHTML = `Total score: ${computer.total}`;

    rollCount++;
    console.log(rollCount);

    if (rollCount == 3) {
        if (computer.total > player.total) {
            results.innerHTML += "You lost, play again!";
        } else if (computer.total == player.total) {
            results.innerHTML += "Game tied, play again!";
        }
        else {
            results.innerHTML += "You won, play again!";
        }
        rollBtn.disabled = true;
        $('#pop-up').fadeTo(1000, 1);
    }

})
playAgain.addEventListener('click', function () {
    $('#pop-up').fadeOut(1000);
})

restartBtn.addEventListener('click', function () {
    player.roundScore = 0;
    player.total = 0;
    computer.roundScore = 0;
    computer.total = 0;
    rollCount = 0;

    playerOutput.innerHTML = '';
    playerTotal.innerHTML = 'Total score: ';
    playerRoundScore.innerHTML = 'Score this round: ';

    computerOutput.innerHTML = '';
    computerRoundScore.innerHTML = 'Score this round: ';
    computerTotal.innerHTML = 'Total score: ';
    rollBtn.disabled = false;
    results.innerHTML = '';
})