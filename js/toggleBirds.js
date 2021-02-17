//
// toggleBirds.js
// Function called by clicking the buttons in index.html to open and close bird sections
//

function toggleBirds() {

    // get the element that was clicked
    var button = event.target;
    var buttonClass = button.className;

    // find bird section with that same class
    var birdBox = document.querySelector('.bird-section.' + buttonClass);

    // if button has the class "section-closed" (which they do by default)
    // then remove the class, which opens the section
    if (birdBox.classList.contains('section-closed')) {
        birdBox.classList.remove('section-closed');
        button.textContent = 'Hide birds';
    // otherwise add the class, which closes the section
    } else {
        birdBox.classList.add('section-closed');
        button.textContent = 'Show birds';
    }

}