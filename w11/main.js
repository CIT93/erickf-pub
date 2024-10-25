import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import {FP} from "./fp.js"

const start = function (houseHoldMembers, houseSize, lifestyleChoice) {
  const houseHoldPoints = houseHoldMembers;
  const houseSizePoints = houseSize
  const lifestyleChoicePoints = lifestyleChoice
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const total = houseHoldPoints + houseSizePoints + lifestyleChoicePoints;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    hHM: houseHoldMembers,
    hS: houseSize,
    hHPTS: houseHoldPoints,
    hHSPTS: housesize,
    lC: lifestyleChoice,
    lCP: lifestyleChoicePoints,
    cfpTotal: total,
  });
};

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
   const fpObj = new FP (FNAME.value, LNAME.value, parseInt(FORM.houseHoldMembers.value), FORM.houses.value, FORM.food.value)
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

const validateField = function (event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

renderTbl(cfpData);