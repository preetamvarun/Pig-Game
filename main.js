let player1Turn = true, player2Turn = false, winner = false;
let r1 = 0, r2 = 0, p1CurrentScore = 0, p2CurrentScore = 0, p1FinalScore = 0, p2FinalScore = 0;

const player1finalScore = document.getElementById('p1Fscore');
const player1currentScore = document.getElementById('p1Cscore');
const player2finalScore = document.getElementById('p2Fscore');
const player2currentScore = document.getElementById('p2Cscore');
const player1Reference = document.getElementById('player1Ref');
const player2Reference = document.getElementById('player2Ref');
const player1Container = document.getElementsByClassName('player1')[0];
const player2Container = document.getElementsByClassName('player2')[0];
const playerCard = document.getElementsByClassName('playerCard');
const rollDice = document.getElementById('roll');
const hold = document.getElementById('holdScore');
const newGame = document.getElementById('playAgain');
const dice = document.getElementsByClassName('dice')[0];
const dice1 = dice.firstElementChild;
const dice2 = dice.lastElementChild;

function changedice1Image(){
    r1 = Math.floor(Math.random() * 6) + 1;
    dice1.src = `./images/dice-${r1}.png`
    dice1.alt = `dice-${r1}`
}

function changedice2Image(){
    r2 = Math.floor(Math.random() * 6) + 1;
    dice2.src = `./images/dice-${r2}.png`
    dice2.alt = `dice-${r2}`
}

function changeColors(){
    player1Turn ? player1Container.style.background = '#B97A98' : player1Container.style.background = '#D8AFBE';
    player1Turn ? player1Reference.style.display = 'inline-block' : player1Reference.style.display = 'none';
    player2Turn ? player2Container.style.background = '#B97A98' : player2Container.style.background = '#D8AFBE';
    player2Turn ? player2Reference.style.display = 'inline-block' : player2Reference.style.display = 'none';
}

function togglePlayers(){
    player1Turn = !player1Turn;
    player2Turn = !player2Turn;
    changeColors();
}

function resetp1currentScore(){
    p1CurrentScore = 0;
    player1currentScore.textContent = 0;
}

function resetp2currentScore(){
    p2CurrentScore = 0;
    player2currentScore.textContent = 0;
}

function holdUserScore(){
    if(winner === false){
        if(player1Turn){
            p1FinalScore += p1CurrentScore;
            if(p1FinalScore >= 100){
                playerCard[0].firstElementChild.textContent = 'Winner!';
                player1finalScore.style.display = 'none';
                winner = true;
            } else{
                player1finalScore.textContent = p1FinalScore;
                resetp1currentScore();  
            }      
        } 
        else{
            p2FinalScore += p2CurrentScore;
            if(p2FinalScore >= 100){
                playerCard[playerCard.length-1].firstElementChild.textContent = 'Winner!';
                player2finalScore.style.display = 'none';
                winner = true;
            } else{
                player2finalScore.textContent = p2FinalScore;
                resetp2currentScore();
            }
        }
        togglePlayers();
    }
}

function calcp1Score(){
    if(r1 !== 1 && r2 !== 1){
        p1CurrentScore += (r1 + r2);
        player1currentScore.textContent = p1CurrentScore;
    } else{
        resetp1currentScore();
        togglePlayers();
    }
}

function calcp2Score(){
    if(r1 !== 1 && r2 !== 1){
        p2CurrentScore += (r1 + r2);
        player2currentScore.textContent = p2CurrentScore;
    } else{
        resetp2currentScore();
        togglePlayers();
    }
}

function diceRoll(){
    if(winner === false){
        changedice1Image();
        changedice2Image();
        player1Turn ? calcp1Score() : calcp2Score();
    }
}

rollDice.addEventListener('click',diceRoll);
hold.addEventListener('click',holdUserScore);

newGame.addEventListener('click', function(){
    if(winner === false){
        resetp1currentScore();
        resetp2currentScore();
        player1finalScore.textContent = 0;
        player2finalScore.textContent = 0;
        p1FinalScore = 0; 
        p2FinalScore = 0;
        winner = false;
        player1Turn = true; player2Turn = false;
        changeColors();
    }
    else{
        window.location.reload();
    }
});
