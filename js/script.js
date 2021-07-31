'use strict';

// create a randon number function
const rand = () => Math.trunc(Math.random() * 100) + 1;


// set a random number
let secretNumber = rand();


// again function
const again = function() {
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = '100';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    secretNumber = rand();
}


// check button
const check = function() {
    const guess = Number(document.querySelector('.guess').value);
        
    if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.message').textContent = "You get it ...!";
        document.querySelector('.number').textContent = secretNumber;
        const highScore = document.querySelector('.highscore').textContent;
        const newScore = document.querySelector('.score').textContent;

        if (newScore > highScore)
            document.querySelector('.highscore').textContent = newScore;
    }

    if (guess <= 0)
        document.querySelector('.message').textContent = "No valid input!";

    if (guess < secretNumber && guess) {
        document.querySelector('.message').textContent = "Too Low!";
        /* */
        let temp = Number(document.querySelector('.score').textContent);
        temp -= 5;
        document.querySelector('.score').textContent = temp;
    }

    if (guess > secretNumber && guess) {
        document.querySelector('.message').textContent = "Too High!";
        /* */
        let temp = Number(document.querySelector('.score').textContent);
        temp -= 5;
        document.querySelector('.score').textContent = temp;
    }
}


// again button
document.querySelector('.again').addEventListener(
    'click', function() {
        again();
    }
)


// check botton
document.querySelector('.check').addEventListener(
    'click', function() {
        check();
    }
)


// 'r' key for Again()
document.addEventListener(
    'keydown', function(e) {
        if (e.key === 'r') again();
    }
)

// 'Enter' key for check()
document.addEventListener(
    'keydown', function(e) {
        if (e.key === 'Enter') check();
    }
)
