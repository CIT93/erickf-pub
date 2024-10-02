import { renderTbl, renderTblHeading} from "./render.js";
import { determineHouseHoldPts, determineHs } from "./cfp.js";

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

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
   const firstName = FORM.firstName.value;
   const lastName = FORM.lastName.value;
   const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
   const houseSize = FORM.houses.value;
   start(houseHoldMembers, houseSize, firstName, lastName);
   OUTPUT.innerHTML = "";
   renderTbl(cfpData)
   FORM.reset();
});


