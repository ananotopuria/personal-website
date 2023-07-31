import { createAndAppendSection } from './join-us-section.js';
import { validate } from './email-validator.js';

/*
const standardProgram = new Program(programConfig.standard.title, programConfig.standard.subtitle, programConfig.standard.buttonText);
const standardSection = standardProgram.createSection();
document.getElementById("events-task").appendChild(standardSection);

const advancedProgram = new Program(programConfig.advanced.title, programConfig.advanced.subtitle, programConfig.advanced.buttonText);
const advancedSection = advancedProgram.createSection();
document.getElementById("events-task").appendChild(advancedSection);


if (advancedSection) {
  advancedSection.remove();
}
*/

createAndAppendSection("standard");
// createAndAppendSection("advanced");

function validateEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const isValid = validate(email);

    if (isValid) {
        alert('Email is valid!');
    } else {
        alert('Email is invalid. Please enter a valid email address.');
    }
}

const subscribeButton = document.querySelector('.form__btn');
subscribeButton.addEventListener('click', validateEmail);




