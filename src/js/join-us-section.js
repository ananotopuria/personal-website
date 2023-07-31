// export function createJoinSection () {
//     document.addEventListener("DOMContentLoaded", function() {

//     const joinProgramSection = document.createElement("section");
//     joinProgramSection.className = "app-section app-section--image-join";

//     const sectionTitle = document.createElement("h2");
//     sectionTitle.className = "app-title";
//     sectionTitle.textContent = "Join Our Program";

//     const sectionSubtitle = document.createElement("h3");
//     sectionSubtitle.className = "app-subtitle";
//     sectionSubtitle.innerHTML = "Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.";

//     const subscribeForm = document.createElement("form");
//     subscribeForm.className = "subscribe__form";

//     const inputFieldDiv = document.createElement("div");
//     inputFieldDiv.className = "subscribe__form--input-field";

//     const emailLabel = document.createElement("label");
//     emailLabel.setAttribute("for", "email");

//     const emailInput = document.createElement("input");
//     emailInput.id = "email";
//     emailInput.className = "input-field";
//     emailInput.name = "email";
//     emailInput.type = "email";
//     emailInput.placeholder = "Email";

//     const subscribeButton = document.createElement("button");
//     subscribeButton.className = "form__btn";
//     subscribeButton.textContent = "SUBSCRIBE";

//     inputFieldDiv.appendChild(emailLabel);
//     inputFieldDiv.appendChild(emailInput);
//     subscribeForm.appendChild(inputFieldDiv);
//     subscribeForm.appendChild(subscribeButton);
//     joinProgramSection.appendChild(sectionTitle);
//     joinProgramSection.appendChild(sectionSubtitle);
//     joinProgramSection.appendChild(subscribeForm);

//     const eventsTaskContainer = document.getElementById("events-task");

//     eventsTaskContainer.appendChild(joinProgramSection);

//     joinProgramSection.className = "app-section app-section--image-join";
//     eventsTaskContainer.appendChild(joinProgramSection);
//     // const subscribeForm = document.querySelector(".subscribe__form");
//     // const emailInput = document.getElementById("email");
//     subscribeForm.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const emailValue = emailInput.value;
//         console.log("Entered Email: ", emailValue);
//     });
// });
// }

/*
export function createJoinSection(){
    class StandardProgram {
        constructor() {
          this.title = "Join Our Program";
          this.subtitle = "Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.";
          this.buttonText = "SUBSCRIBE";
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
      
      class AdvancedProgram extends StandardProgram {
        constructor() {
          super();
          this.title = "Join Our Advanced Program";
          this.buttonText = "Subscribe to Advanced Program";
        }
      }
    
      class SectionCreator {
      create(type) {
        if (type === "standard") {
          return new StandardProgram();
        } else if (type === "advanced") {
          return new AdvancedProgram();
        } else {
          throw new Error("Invalid program type.");
        }
      }
    }
    
    const sectionCreator = new SectionCreator();
    
    // standard program section
    
    const standardProgram = sectionCreator.create("standard");
    const standardSection = standardProgram.createSection();
    document.getElementById("events-task").appendChild(standardSection);
    
    // advanced program section
    
    const advancedProgram = sectionCreator.create("advanced");
    const advancedSection = advancedProgram.createSection();
    document.getElementById("events-task").appendChild(advancedSection);
    
    // removing sections
    
    // standardSection.remove();
    advancedSection.remove();
}
*/

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
