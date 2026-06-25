renderPage();

function renderPage(){

    const jsRock = document.querySelector('.jsRock');
const jsPaper = document.querySelector('.jsPaper');
const jsScissors = document.querySelector('.jsScissors');
const jsLizard = document.querySelector('.jsLizard');
const jsSpock = document.querySelector('.jsSpock');
const jsResetBttn = document.querySelector('.jsResetBttn');

const jsTies = document.querySelector('.jsTies');
const jsUserWins = document.querySelector ('.jsUserWins');
const jsUserLoses = document.querySelector ('.jsUserLoses');
const jsComputerWins = document.querySelector ('.jsComputerWins');
const jsComputerLoses = document.querySelector ('.jsComputerLoses');


let gameScore = JSON.parse(localStorage.getItem('gameScore')) || [
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

function renderResultOnPage(result, userMove, computerMove){

    const jsResultContainer = document.querySelector('.jsResultContainer');

    const jsResult = document.querySelector('.jsResult');
    const jsMoves = document.querySelector('.jsMoves');

    const moves = ['🗿', '📝', '✂️', '🦎', '🖖'];

    if(result === 'userWins'){

        jsResult.innerText = 'User wins 🏆'
        jsMoves.innerText = `User chose ${moves[userMove]} 🆚 Computer chose ${moves[computerMove]}`;

        setTimeout(()=>{
            jsResultContainer.classList.add('hiden')
        }, 2000);

        jsResultContainer.classList.remove('hiden');

    } else if (result === 'computerWins') {
        jsResult.innerText = 'Computer wins 🏆'
        jsMoves.innerText = `User chose ${moves[userMove]} 🆚 Computer chose ${moves[computerMove]}`;

        setTimeout(()=>{
            jsResultContainer.classList.add('hiden')
        }, 2000);

        jsResultContainer.classList.remove('hiden');
    } else if (result === 'tie'){
        jsResult.innerText = `It's a tie 🏆`
        jsMoves.innerText = `User chose ${moves[userMove]} 🆚 Computer chose ${moves[computerMove]}`;

        setTimeout(()=>{
            jsResultContainer.classList.add('hiden')
        }, 2000);

        jsResultContainer.classList.remove('hiden');
    }
}

function game(userMove, computerMove){


    if(userMove === 'rock'){

        if(computerMove === 'rock'){
            gameScore[2].ties += 1;
            renderResultOnPage('tie', 0, 0);
            renderGameScore()
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 0, 1);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'scissors'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 0, 2);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'lizard') {
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 0, 3);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
             renderResultOnPage('computerWins', 0, 4);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } 
        
    } else if(userMove === 'paper'){

        if(computerMove === 'rock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 1, 0);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[2].ties += 1;
            renderResultOnPage('tie', 1, 1);
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 1, 2);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 1, 3);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 1, 4);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        }

    } else if (userMove === 'scissors'){

        if(computerMove === 'rock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 2, 0);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 2, 1);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[2].ties += 1;
            renderResultOnPage('tie', 2, 2);
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 2, 3);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 2, 4);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        }

    } else if (userMove === 'lizard'){

        if(computerMove === 'rock'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 3, 0);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 3, 1);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 3, 2);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[2].ties += 1;
            renderResultOnPage('tie', 3, 3);
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 3, 4);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        }

    } else if (userMove === 'spock'){

        if(computerMove === 'rock'){
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 4, 0);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 4, 1);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].wins += 1;
            gameScore[1].loses += 1;
            renderResultOnPage('userWins', 4, 2);
            renderGameScore('userWins', 'computerLoses');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].loses += 1;
            gameScore[1].wins += 1;
            renderResultOnPage('computerWins', 4, 3);
            renderGameScore('userLoses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[2].ties += 1;
            renderResultOnPage('tie', 4, 4);
            renderGameScore();
            saveToStorage();
        }

    }
}

function resetGame(){

    gameScore = [
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

    saveToStorage();
    renderPage();

};

jsResetBttn.addEventListener('click',resetGame);


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

}



