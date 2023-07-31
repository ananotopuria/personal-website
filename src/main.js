
import { Program, programConfig, createAndAppendSection } from './join-us-section.js';


const standardProgram = new Program(programConfig.standard.title, programConfig.standard.subtitle, programConfig.standard.buttonText);
const standardSection = standardProgram.createSection();
document.getElementById("events-task").appendChild(standardSection);

const advancedProgram = new Program(programConfig.advanced.title, programConfig.advanced.subtitle, programConfig.advanced.buttonText);
const advancedSection = advancedProgram.createSection();
document.getElementById("events-task").appendChild(advancedSection);


if (advancedSection) {
  advancedSection.remove();
}