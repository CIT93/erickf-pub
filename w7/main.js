import { renderTbl, renderTblHeading} from "./render.js";
import { determineHouseHoldPts, determineHs } from "./carbonfp.js";

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];
const TBL = document.getElementById("tab-data")
  
 FORM.addEventListener("submit", function (e) {
   e.preventDefault();
   const firstName = FORM.firstName.value;
   const lastName = FORM.lastName.value;
   const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
   const houseSize = FORM.houses.value;
   start(houseHoldMembers, houseSize, firstName, lastName);
   OUTPUT.innerHTML = "";
   TBL.innerHTML = "";
   const table = renderTblHeading()
   renderTbl(cfpData, table)
   TBL.appendChild(table)
   FORM.reset();
});

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseHoldSizePTS = determineHs(houseSize);
  const total = houseHoldPTS + houseHoldSizePTS;
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  cfpData.push({
    hHM: houseHoldMembers,
    hS: houseSize,
    hHPTS: houseHoldPTS,
    hHSPTS: houseHoldSizePTS,
    cfpTotal: total,
    firstName: firstName,
    lastName: lastName,
  });
}

