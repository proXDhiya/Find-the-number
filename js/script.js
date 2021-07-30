'use strict';

// create a rabdon number using function
const rand = () => Math.trunc(Math.random() * 100) + 1;
let secretNumber = rand();

// again button
document.querySelector('.again').addEventListener(
    'click', function() {
        document.querySelector('.number').style.width = "15rem";
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.score').textContent = '100';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        secretNumber = rand();
    }
)


// check botton
document.querySelector('.check').addEventListener(
    'click', function() {
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
)
