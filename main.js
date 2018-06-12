// Load the button and result elements by querying their 'js` prefixed classes
var buttonElement = document.querySelector('.js-button');
var resultElement = document.querySelector('.js-result');

// Add a click event listener to the button which will run the passed function
// when a user clicks the button
buttonElement.addEventListener('click', function() {

    // Store the result of the prompt in a variable. This will be whatever the user types
    // in the textbox when they see the dialogue element
    var message = prompt('What is your name?');

    // Stich the parts of the string together to create one long string. Set this 
    // as the inner HTML of the result element
    resultElement.innerHTML = 'Hello, my name is <b>' + message + '</b>';
});