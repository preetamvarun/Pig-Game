let player1Turn = true, player2Turn = false;

let r1 = 0, r2 = 0;

const player1finalScore = document.getElementById('p1Fscore');
const player1currentScore = document.getElementById('p1Cscore');
const player2finalScore = document.getElementById('p2Fscore');
const player2currentScore = document.getElementById('p2Cscore');
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

function togglePlayers(){
    player1Turn = !player1Turn;
    player2Turn = !player2Turn;
    console.log(`p1 status ${player1Turn} and p2 status ${player2Turn}`);
}

function calcp1Score(){
    if(r1 !== 1 && r2 !== 1){
        console.log('calculating p1Score');
    } else{
        togglePlayers();
    }
}

function calcp2Score(){
    if(r1 !== 1 && r2 !== 1){
        console.log('calculating p2Score');
    } else{
        togglePlayers();
    }
}

function diceRoll(){
    changedice1Image();
    changedice2Image();
    player1Turn ? calcp1Score() : calcp2Score();
}




rollDice.addEventListener('click',diceRoll);
