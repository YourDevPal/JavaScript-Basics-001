var buttonElement = document.querySelector('.js-button');
var resultElement = document.querySelector('.js-result');

buttonElement.addEventListener('click', function() {
    var message = prompt('What is your name?');

    resultElement.innerHTML = 'Hello, my name is <b>' + message + '</b>';
});