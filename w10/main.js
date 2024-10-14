import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHs } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";


const start = (houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseHoldSizePTS = determineHs(houseSize);
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const total = houseHoldPTS + houseHoldSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    hHM: houseHoldMembers,
    hS: houseSize,
    hHPTS: houseHoldPTS,
    hHSPTS: houseHoldSizePTS,
    cfpTotal: total,
  });
};



FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    start(parseInt(FORM.houseHoldMembers.value), FORM.houses.value, FNAME.value,LNAME.value)
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  }
   else {
    SUBMIT.textContent = "Form requires first name and last name";
  }
});

const validateField = event => {
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

const add2 = a => 2 + a;


const result = add2(100);

//spread argument

const a = 3


// (function (a){
//   console.log("inside the IIFE");
//   console.log(a);
// })(a);
//in devTools an error keeps coming back with typeError: 3 is not a function