const jsRock = document.querySelector('.jsRock');
const jsPaper = document.querySelector('.jsPaper');
const jsScissors = document.querySelector('.jsScissors');
const jsLizard = document.querySelector('.jsLizard');
const jsSpock = document.querySelector('.jsSpock');

const jsTies = document.querySelector('.jsTies');
const jsUserWins = document.querySelector ('.jsUserWins');
const jsUserLoses = document.querySelector ('.jsUserLoses');
const jsComputerWins = document.querySelector ('.jsComputerWins');
const jsComputerLoses = document.querySelector ('.jsComputerLoses');


const gameScore = JSON.parse(localStorage.getItem('gameScore')) || [
    {
        name: 'user',
        wins: 0,
        loses: 0
    },
    {
        computer: 'user',
        wins: 0,
        loses: 0
    },
    {
        ties: 0
    }
];

jsTies.innerText = gameScore[2].ties;
jsUserWins.innerText = gameScore[0].wins;
jsUserLoses.innerText = gameScore[0].loses;
jsComputerWins.innerText = gameScore[1].wins;
jsComputerLoses.innerText = gameScore[1].loses;

function saveToStorage(){
    localStorage.setItem('gameScore', JSON.stringify(gameScore));
};


function computerMove(){

    const randomNumber = Math.floor(Math.random() * 5 + 1);

    switch(randomNumber){
        case 1:
           return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        case 4:
           return 'lizard';
        case 5:
            return 'spock';
    }

}

function renderGameScore(userResult, computerResult){
   

    if(userResult === 'userWins' && computerResult === 'computerLoses'){

        jsUserWins.innerText = gameScore[0].wins;
        jsComputerLoses.innerText = gameScore[1].loses;

    } else if (userResult === 'userLoses' && computerResult === 'computerWins'){

        jsUserLoses.innerText = gameScore[0].loses;
        jsComputerWins.innerText = gameScore[1].wins;
         
    } else {
        jsTies.innerText = gameScore[2].ties;
    }

}

function game(userMove, computerMove){


    if(userMove === 'rock'){

        if(computerMove === 'rock'){
            gameScore[2].ties += 1;
            renderGameScore()
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if ('scissors'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'lizard') {
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } 
        
    } else if(userMove === 'paper'){

        if(computerMove === 'rock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[2].ties += 1;
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        }

    } else if (userMove === 'scissors'){

        if(computerMove === 'rock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[2].ties += 1;
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        }

    } else if (userMove === 'lizard'){

        if(computerMove === 'rock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[2].ties += 1;
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        }

    } else if (userMove === 'spock'){

        if(computerMove === 'rock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[2].ties += 1;
            renderGameScore();
            saveToStorage();
        }

    }
}


jsRock.addEventListener('click', ()=>{
    const userMove = 'rock';
    const actualComputerMove = computerMove();

    game(userMove, actualComputerMove);

});
jsPaper.addEventListener('click', ()=>{
    const userMove = 'paper';
    const actualComputerMove = computerMove();

    game(userMove, actualComputerMove);
});
jsScissors.addEventListener('click', ()=>{
    const userMove = 'scissors';
    const actualComputerMove = computerMove();

    game(userMove, actualComputerMove);
});
jsLizard.addEventListener('click', ()=>{
    const userMove = 'lizard';
    const actualComputerMove = computerMove();

    game(userMove, actualComputerMove);
});
jsSpock.addEventListener('click', ()=>{
    const userMove = 'spock';
    const actualComputerMove = computerMove();

    game(userMove, actualComputerMove);
});