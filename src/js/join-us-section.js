import { validate } from "./email-validator.js";
class Program {
  constructor(title, subtitle, buttonText) {
    this.title = title;
    this.subtitle = subtitle;
    this.buttonText = buttonText;
  }

  createSection() {
    const joinProgramSection = document.createElement("section");
    joinProgramSection.className = "app-section app-section--image-join";

    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "app-title";
    sectionTitle.textContent = this.title;

    const sectionSubtitle = document.createElement("h3");
    sectionSubtitle.className = "app-subtitle";
    sectionSubtitle.innerHTML = this.subtitle;

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
    subscribeButton.textContent = this.buttonText;

    inputFieldDiv.appendChild(emailLabel);
    inputFieldDiv.appendChild(emailInput);
    subscribeForm.appendChild(inputFieldDiv);
    subscribeForm.appendChild(subscribeButton);
    joinProgramSection.appendChild(sectionTitle);
    joinProgramSection.appendChild(sectionSubtitle);
    joinProgramSection.appendChild(subscribeForm);

    return joinProgramSection;
  }
}

const programConfig = {
  standard: {
    title: "Join Our Program",
    subtitle:
      "Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.",
    buttonText: "SUBSCRIBE",
  },
  advanced: {
    title: "Join Our Advanced Program",
    subtitle:
      "Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.",
    buttonText: "Subscribe to Advanced Program",
  },
};

export function createAndAppendSection(programType) {
  // eslint-disable-next-line no-console
  console.log(programType);
  const programInfo = programConfig[programType];
  if (!programInfo) {
    throw new Error("Invalid program type.");
  }

  const program = new Program(
    programInfo.title,
    programInfo.subtitle,
    programInfo.buttonText
  );
  const programSection = program.createSection();
  document.getElementById("events-task").appendChild(programSection);
}

////////////////////////////////////////////////////////////////////////

function saveEmailAndSubscriptionStatus(email, isSubscribed) {
  localStorage.setItem("subscriptionEmail", email);
  localStorage.setItem("isSubscribed", isSubscribed);
}

function loadEmailAndSubscriptionStatus() {
  const savedEmail = localStorage.getItem("subscriptionEmail");
  const isSubscribed = localStorage.getItem("isSubscribed") === "true";

  const emailInput = document.getElementById("email");
  if (emailInput) {
    if (savedEmail) {
      emailInput.value = savedEmail;
    }

    emailInput.addEventListener("input", handleInputChange);
  }

  updateSubscriptionUI(isSubscribed);
}

function updateSubscriptionUI(isSubscribed) {
  const emailInput = document.getElementById("email");
  const subscribeButton = document.querySelector(".form__btn");

  if (emailInput && subscribeButton) {
    if (isSubscribed) {
      emailInput.style.display = "none";
      subscribeButton.textContent = "Unsubscribe";
    } else {
      emailInput.style.display = "block";
      subscribeButton.textContent = "Subscribe";
    }
  }
}

function handleInputChange(event) {
  const email = event.target.value;
  saveEmailAndSubscriptionStatus(email, false);
}

// function handleSubscriptionClick(event) {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const isValid = validate(email);

//   if (isValid) {
//     const isSubscribed = localStorage.getItem("isSubscribed") === "true";

//     if (isSubscribed) {
//       // send unsubscribe request to /unsubscribe
//       EmailUnsubscribe(email);
//       localStorage.removeItem("subscriptionEmail");
//       localStorage.removeItem("isSubscribed");
//     } else {
//       EmailSubscribe(email);
//       saveEmailAndSubscriptionStatus(email, true);
//     }

//     loadEmailAndSubscriptionStatus();
//     updateSubscriptionUI(!isSubscribed);

//   }
// }

async function handleSubscriptionClick(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const isValid = validate(email);

  if (!isValid) {
    return;
  }

  const isSubscribed = localStorage.getItem("isSubscribed") === "true";

  const subscribeButton = document.querySelector(".form__btn");
  if (subscribeButton) {
    subscribeButton.style.opacity = 0.5;

    setTimeout(async () => {
      subscribeButton.disabled = true;

      try {
        if (isSubscribed) {
          await EmailUnsubscribe(email);
          localStorage.removeItem("subscriptionEmail");
          localStorage.removeItem("isSubscribed");
        } else {
          await EmailSubscribe(email);
          saveEmailAndSubscriptionStatus(email, true);
        }

        loadEmailAndSubscriptionStatus();
        updateSubscriptionUI(!isSubscribed);
      } catch (error) {
        window.alert(error);
      } finally {
        subscribeButton.disabled = false;
        subscribeButton.style.opacity = 1;
      }
    }, 500);
  }
}

export {
  saveEmailAndSubscriptionStatus,
  loadEmailAndSubscriptionStatus,
  updateSubscriptionUI,
  handleInputChange,
  handleSubscriptionClick,
};

function EmailUnsubscribe(email) {
  fetch("http://localhost:3000/unsubscribe", {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((text) => {
          throw new Error(text.error);
        });
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => window.alert(error));
}

function EmailSubscribe(email) {
  fetch("http://localhost:3000/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((text) => {
          throw new Error(text.error);
        });
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => window.alert(error));
}
