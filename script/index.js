const jsRock = document.querySelector('.jsRock');
const jsPaper = document.querySelector('.jsPaper');
const jsScissors = document.querySelector('.jsScissors');
const jsLizard = document.querySelector('.jsLizard');
const jsSpock = document.querySelector('.jsSpock');
const jsResetBttn = document.querySelector('.jsResetBttn');

const jsTies = document.querySelector('.jsTies');
const jsUserWins = document.querySelector ('.jsUserWins');
const jsUserLosses = document.querySelector ('.jsUserLosses');
const jsComputerWins = document.querySelector ('.jsComputerWins');
const jsComputerLosses = document.querySelector ('.jsComputerLosses');


let gameScore = JSON.parse(localStorage.getItem('gameScore')) || [
    {
        player: 'user',
        wins: 0,
        losses: 0
    },
    {
        player: 'computer',
        wins: 0,
        losses: 0
    },
    {
        ties: 0
    }
];

jsTies.innerText = gameScore[2].ties;
jsUserWins.innerText = gameScore[0].wins;
jsUserLosses.innerText = gameScore[0].losses;
jsComputerWins.innerText = gameScore[1].wins;
jsComputerLosses.innerText = gameScore[1].losses;

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
   

    if(userResult === 'userWins' && computerResult === 'computerLosses'){

        jsUserWins.innerText = gameScore[0].wins;
        jsComputerLosses.innerText = gameScore[1].losses;

    } else if (userResult === 'userLosses' && computerResult === 'computerWins'){

        jsUserLosses.innerText = gameScore[0].losses;
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
        jsMoves.innerText = `User chose ${moves[userMove]} - 🆚 - Computer chose ${moves[computerMove]}`;

        setTimeout(()=>{
            jsResultContainer.classList.add('hidden')
        }, 2000);

        jsResultContainer.classList.remove('hidden');

    } else if (result === 'computerWins') {
        jsResult.innerText = 'Computer wins 🏆'
        jsMoves.innerText = `User chose ${moves[userMove]} - 🆚 - Computer chose ${moves[computerMove]}`;

        setTimeout(()=>{
            jsResultContainer.classList.add('hidden')
        }, 2000);

        jsResultContainer.classList.remove('hidden');
    } else if (result === 'tie'){
        jsResult.innerText = `It's a tie 🏆`
        jsMoves.innerText = `User chose ${moves[userMove]} - 🆚 - Computer chose ${moves[computerMove]}`;

        setTimeout(()=>{
            jsResultContainer.classList.add('hidden')
        }, 2000);

        jsResultContainer.classList.remove('hidden');
    }
}

function game(userMove, computerMove){


    if(userMove === 'rock'){

        if(computerMove === 'rock'){
            gameScore[2].ties ++;
            renderResultOnPage('tie', 0, 0);
            renderGameScore()
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 0, 1);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'scissors'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 0, 2);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if (computerMove === 'lizard') {
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 0, 3);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].losses++;
            gameScore[1].wins++;
             renderResultOnPage('computerWins', 0, 4);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } 
        
    } else if(userMove === 'paper'){

        if(computerMove === 'rock'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 1, 0);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[2].ties++;
            renderResultOnPage('tie', 1, 1);
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 1, 2);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 1, 3);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 1, 4);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        }

    } else if (userMove === 'scissors'){

        if(computerMove === 'rock'){
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 2, 0);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 2, 1);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[2].ties++;
            renderResultOnPage('tie', 2, 2);
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 2, 3);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 2, 4);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        }

    } else if (userMove === 'lizard'){

        if(computerMove === 'rock'){
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 3, 0);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 3, 1);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 3, 2);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[2].ties++;
            renderResultOnPage('tie', 3, 3);
            renderGameScore();
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 3, 4);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        }

    } else if (userMove === 'spock'){

        if(computerMove === 'rock'){
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 4, 0);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if(computerMove === 'paper'){
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 4, 1);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'scissors') {
            gameScore[0].wins++;
            gameScore[1].losses++;
            renderResultOnPage('userWins', 4, 2);
            renderGameScore('userWins', 'computerLosses');
            saveToStorage();
        } else if (computerMove === 'lizard'){
            gameScore[0].losses++;
            gameScore[1].wins++;
            renderResultOnPage('computerWins', 4, 3);
            renderGameScore('userLosses', 'computerWins');
            saveToStorage();
        } else if (computerMove === 'spock'){
            gameScore[2].ties++;
            renderResultOnPage('tie', 4, 4);
            renderGameScore();
            saveToStorage();
        }

    }
}

function resetGame(){

    localStorage.removeItem('gameScore');
    window.location.href = '../index.html';

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



