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
  console.log("subscribeButton", subscribeButton)
  if (subscribeButton) {
    subscribeButton.addEventListener("click", handleSubscriptionClick);
  }

  loadEmailAndSubscriptionStatus();
});
// community section

function generateTestimonialHTML(testimonial) {
  return `
      <div class="testimonial">
          <img class="testimonial-img" src="${testimonial.avatar}" alt="Avatar">
          <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          <div class="testimonial-author">
              <div class="testimonial-author-firstname">${testimonial.firstName}</div>
              <div class="testimonial-author-lastname">${testimonial.lastName}</div>
          </div>
          <div class="testimonial-position">${testimonial.position}</div>
      </div>
  `;
}

function renderTestimonial(testimonial) {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  const testimonialHTML = generateTestimonialHTML(testimonial);
  testimonialsContainer.innerHTML += testimonialHTML;
}

function fetchTestimonialsByIds(ids) {
  const promises = ids.map((id) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `http://localhost:3000/community/${id}`, true);

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const responseData = JSON.parse(xhr.responseText);
          resolve(responseData);
        } else {
          reject("Failed to fetch data");
        }
      };

      xhr.onerror = function () {
        reject("Failed to fetch data");
      };

      xhr.send();
    });
  });

  Promise.all(promises)
    .then((testimonials) => {
      testimonials.forEach((testimonial) => {
        renderTestimonial(testimonial);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchTestimonialsByIds([
  "2f1b6bf3-f23c-47e4-88f2-e4ce89409376",
  "1157fea1-8b72-4a9e-b253-c65fa1556e26",
  "b96ac290-543c-4403-80fe-0c2d44e84ea9",
]);
