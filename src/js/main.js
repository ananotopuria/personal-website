import { createAndAppendSection } from "./join-us-section.js";
import { validate } from "./email-validator.js";
import "../styles/style.css";

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

// function validateEmail(event) {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const isValid = validate(email);

//   if (isValid) {
//     alert("Email is valid!");
//   } else {
//     alert("Email is invalid. Please enter a valid email address.");
//   }
// }

const subscribeButton = document.querySelector(".form__btn");
subscribeButton.addEventListener("click", validateEmail);

function saveEmailToLocalStorage(email) {
  localStorage.setItem("subscriptionEmail", email);
}
function loadEmailFromLocalStorage() {
  const savedEmail = localStorage.getItem("subscriptionEmail");
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
  }
}
function handleInputChange(event) {
  const email = event.target.value;
  saveEmailToLocalStorage(email);
}

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", handleInputChange);

window.addEventListener("load", loadEmailFromLocalStorage);

// unsubscribe

// function updateSubscriptionUI(isSubscribed) {
//   const emailInput = document.getElementById("email");
//   const subscribeButton = document.querySelector(".form__btn");
//   const joinSection = document.getElementById("joinSection");

//   if (isSubscribed) {
//     emailInput.style.display = "none";
//     subscribeButton.textContent = "Unsubscribe";
//     joinSection.style.justifyContent = "center";
//   } else {
//     emailInput.style.display = "block";
//     subscribeButton.textContent = "Subscribe";
//     joinSection.style.justifyContent = "flex-start";
//   }
// }
