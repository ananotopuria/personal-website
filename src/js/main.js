import {
  createAndAppendSection,
  loadEmailAndSubscriptionStatus,
  handleInputChange,
  handleSubscriptionClick,
} from "./join-us-section.js";
import "../styles/style.css";

createAndAppendSection("standard");

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.addEventListener("input", handleInputChange);
  }

  const subscribeButton = document.querySelector(".form__btn");
  if (subscribeButton) {
    subscribeButton.addEventListener("click", handleSubscriptionClick);
  }

  loadEmailAndSubscriptionStatus();
});
