var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

document.querySelector('#current-' + activePlayer).textContent = dice;

var x = document.querySelector('#score-' + activePlayer).textContent;
document.querySelector('.dice').style.display = 'none'