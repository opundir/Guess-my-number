'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //   When no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
  }
  // when get correct answer
  else if (guess === secretnumber) {
    // document.querySelector('.message').textContent = 'Correct Number!!';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > document.querySelector('.highscore').textContent)
      document.querySelector('.highscore').textContent = score;
  } else if (guess != secretnumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretnumber ? 'Too high' : 'Too low';
      displayMessage(guess > secretnumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You Lost';
      displayMessage('You Lost');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost';
  //       document.querySelector('body').style.backgroundColor = '#FF0000';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost';
  //       document.querySelector('body').style.backgroundColor = '#FF0000';
  //       document.querySelector('.score').textContent = 0;
  //     }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').textContent = 'Start Guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
