import { renderTbl} from "./render.js";
import { determineHouseHoldPts, determineHs } from "./cfp.js";
import { FORM, VALIDF, VALIDL } from "./global.js";
import {saveLS, cfpData} from "./storage.js";


 function start(houseHoldMembers, houseSize) {
   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
   const houseHoldSizePTS = determineHs(houseSize);
   const total = houseHoldPTS + houseHoldSizePTS;
   const firstName = FORM.firstName.value;
   const lastName = FORM.lastName.value;
   cfpData.push({
     firstName: firstName,
     lastName: lastName,
     hHM: houseHoldMembers,
     hS: houseSize,
     hHPTS: houseHoldPTS,
     hHSPTS: houseHoldSizePTS,
     cfpTotal: total,
   });
 }

 

 FORM.addEventListener("submit", function (e) {
   e.preventDefault();
   const firstNameIsValid = VALIDF.value !== '';
   const lastNameIsValid = VALIDL.value !== '';
   if (firstNameIsValid === true && lastNameIsValid === true) {
     const firstName = FORM.firstName.value;
     const lastName = FORM.lastName.value;
     const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
     const houseSize = FORM.houses.value;
     start(houseHoldMembers, houseSize, firstName, lastName);
     saveLS(cfpData);
     renderTbl(cfpData);
   }
     FORM.reset();
 });

 function validateField(event) {
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

 VALIDF.addEventListener('blur', validateField);
 VALIDL.addEventListener("blur", validateField);


