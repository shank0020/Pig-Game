var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;

document.getElementById('score-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-1').textContent = 0;

var x = document.querySelector('#score-' + activePlayer).textContent;
document.querySelector('.dice').style.display = 'none'

document.addEventListener('click', function() {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = './images/dice-' + dice + '.png';
});