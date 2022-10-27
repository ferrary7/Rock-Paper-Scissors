const buttons = document.querySelectorAll('.buttons');
const score1 = document.getElementById('score-1')
const score2 = document.getElementById('score-2')
const playerHand = document.getElementById('player-hand')
const computerHand = document.getElementById('comp-hand')
const gameOverOverlay = document.getElementById('game-over')
const winner = document.getElementById('winner')
const buttonHolder = document.getElementById('button-holder')

let playerScore=0,computerScore=0,computerTurn;

nextRound()

function nextRound() {
    let temp = computerTurn;
    computerTurn = Math.floor(Math.random()*3);
    if (temp == computerTurn) {
        if(temp%2 == 0) nextRound()
        else computerTurn = Math.floor(Math.random()*3);
    }
}

for(let i=0; i < 3; i++) {
    buttons[i].onclick= () => {
        playerHand.style.backgroundImage = `url('./assets/${i}.png')`;
        computerHand.style.backgroundImage = `url('./assets/${computerTurn}.png')`;
        if (i==0) {
            if (computerTurn == 1)
            computerScore++;    
            else if (computerTurn == 2)
            playerScore++;

        }   
        else if (i==1) {    
            if (computerTurn==0)
            playerScore++;
            else if (computerTurn == 2)
            computerScore++;
        }
        else {
            if (computerTurn==0)
            computerScore++;
            else if (computerTurn == 1)
            playerScore++;
        }

        score1.innerText=playerScore;
        score2.innerText=computerScore;

        if (playerScore==5 || computerScore==5) {
            gameOver();
        }

        nextRound();
    }
}

function gameOver() {
    gameOverOverlay.style.display='block'
    buttonHolder.style.display='none'

    if (playerScore>computerScore) winner.innerText='You'
    else winner.innerText='Computer'
}

document.getElementById('play-again').onclick=()=>{
    window.open('game.html','_self')
}