document.addEventListener("DOMContentLoaded", function() {
    
    const joinProgramSection = document.createElement("section");
    joinProgramSection.className = "app-section app-section--image-join";

    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "app-title";
    sectionTitle.textContent = "Join Our Program";

    const sectionSubtitle = document.createElement("h3");
    sectionSubtitle.className = "app-subtitle";
    sectionSubtitle.innerHTML = "Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.";

    const subscribeForm = document.createElement("form");
    subscribeForm.className = "subscribe__form";

    const inputFieldDiv = document.createElement("div");
    inputFieldDiv.className = "subscribe__form--input-field";

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");

    const emailInput = document.createElement("input");
    emailInput.id = "email";
    emailInput.className = "input-field";
    emailInput.name = "email";
    emailInput.type = "email";
    emailInput.placeholder = "Email";

    const subscribeButton = document.createElement("button");
    subscribeButton.className = "form__btn";
    subscribeButton.textContent = "SUBSCRIBE";

    inputFieldDiv.appendChild(emailLabel);
    inputFieldDiv.appendChild(emailInput);
    subscribeForm.appendChild(inputFieldDiv);
    subscribeForm.appendChild(subscribeButton);
    joinProgramSection.appendChild(sectionTitle);
    joinProgramSection.appendChild(sectionSubtitle);
    joinProgramSection.appendChild(subscribeForm);

    const eventsTaskContainer = document.getElementById("events-task");

    eventsTaskContainer.appendChild(joinProgramSection);

    joinProgramSection.className = "app-section app-section--image-join";
    eventsTaskContainer.appendChild(joinProgramSection);
    // const subscribeForm = document.querySelector(".subscribe__form");
    // const emailInput = document.getElementById("email");
    subscribeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailValue = emailInput.value;
        console.log("Entered Email: ", emailValue);
    });
});







