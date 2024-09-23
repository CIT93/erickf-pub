import { renderTbl } from "./render.js";
import { start } from "./render.js";

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

  function displayOutOb (obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);
  }
    //I do not know why the error is occuring, I have having a bit of trouble this week understanding the content

 //  function displayOutput() {
   // for (let i = 0; i < cfpData.length; i++) {
     //   console.log(i)
       // const output = document.getElementById("output");
        //const newH2 = document.createElement("h2");
        //newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
        //output.appendChild(newH2);

    //}
   //}
    //    console.log(arr)
     //   const output = document.getElementById("output");
      //  const newH2 = document.createElement("h2");
      //  newH2.textContent = `Carbon Footprint ${arr[4]}`;
      //  const newH3 = document.createElement("h3");
      //  newH3.textContent = `Based  on number in and size of home`;
       // const newP = document.createElement("p");
       // newP.textContent = `Your household consists of ${arr[0]} people, your score is ${arr[2]}. The size of your household is ${arr[1]}, the score is ${arr[3]}. 
      //  The data that has been provided will update the overall score to ${arr[4]}. `;
     //output.appendChild(newH2);
       // output.appendChild(newH3);
      //  output.appendChild(newP); 

 FORM.addEventListener("submit", function (e) {
   e.preventDefault();

   const firstName = FORM.firstname.value;
   const lastName = FORM.lastname.value;
   const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
   const houseSize = FORM.houses.value;
   OUTPUT.innerHTML = "";
   //displayOutput();
   renderTbl(cfpData);
   FORM.reset();
 });

 //Yes the coding the score apartment does work correctly
//To not have repeat data, and assume the data given will be incorrect/bad
    
  //}]

  let houseNumber = 0;
  
  function determineHs(houseSize) {
    let houseHoldSizePTS = 0;
    if (houseSize === "Large") {
        houseHoldSizePTS = 10;
    } else if (houseSize === "Medium") {
        houseHoldSizePTS = 7;
    } else if (houseSize === "Small") {
        houseHoldSizePTS = 4;
    }else if (houseSize === "Apartment") {
        houseHoldSizePTS = 2;
    }
    return houseHoldSizePTS
  }
  
 determineHs("large")

