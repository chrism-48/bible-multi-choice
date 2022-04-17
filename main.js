resetButton = document.getElementById('reset').addEventListener('click', resetAll);
startButton = document.getElementById('start').addEventListener('click', startOver);
multiChoice = document.querySelector('ul');
myQuestion = document.querySelector('ol');
showAnswer = document.querySelector('textarea');







function resetAll() {
    multiChoice.innerText = '';
    myQuestion.innerText = '';
    showAnswer.innerText = '';
}

function startOver() {
    window.location.reload(false);
}