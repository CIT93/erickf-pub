const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseHoldPts(numberInhousehold) {
    let houseHoldPoints = 0;
    if (numberInhousehold === 0) {
      houseHoldPoints = 14;
    } else if (numberInhousehold === 1) {
        houseHoldPoints = 12;
    } else if (numberInhousehold === 2) {
        houseHoldPoints = 10;
    } else if (numberInhousehold === 3) {
        houseHoldPoints = 8;
    } else if (numberInhousehold === 4) {
        houseHoldPoints = 6;
    } else if (numberInhousehold === 5) {
        houseHoldPoints = 4;
    } else if (numberInhousehold > 5) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints
  }

  function displayOutOb (obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);
  }

 function start (houseHoldMembers, houseSize, firstname, lastname) {
     const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
     const houseHoldSizePTS = determineHs(houseSize);
     const total = houseHoldPTS + houseHoldSizePTS;
     cfpData.push({
         hHM: houseHoldMembers,
        hS: houseSize,
        hHPTS: houseHoldPTS,
        hHSPTS: houseHoldSizePTS,
        cfpTotal: total,
        firstName: firstname,
        lastName: lastname


     });
  }
  
  function displayOutput() {
   for(obj of cfpData){
     console.log(obj)
     const newH2 = document.createElement("h2");
     newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
     const newH3 = document.createElement("h3");
     newH3.textContent = `Hello, ${FORM.firstname.value} ${FORM.lastname.value} Based  on number of people in home and size of home`;
     const newP = document.createElement("p");
     newP.textContent = `Your household consists of ${obj.hHM} people, your score is ${obj.hHPTS}. The size of your household is ${obj.hS}, the score is ${obj.hHSPTS}. 
     The data that has been provided will update the overall score to ${obj.cfpTotal}. `;
     OUTPUT.appendChild(newH2);
     OUTPUT.appendChild(newH3);
     OUTPUT.appendChild(newP);

    }
  }

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
   start(houseHoldMembers, houseSize);
   OUTPUT.innerHTML = "";
   displayOutput();
   FORM.reset();
 });

 //Yes the coding the score apartment does work correctly
//To not have repeat data, and assume the data given will be incorrect/bad
    
  //}]

  let houseNumber = 0;
  
  function determineHs(houseSize) {
    let houseHoldSizePTS = 0;
    if (houseSize === "large") {
        houseHoldSizePTS = 10;
    } else if (houseSize === "medium") {
        houseHoldSizePTS = 7;
    } else if (houseSize === "small") {
        houseHoldSizePTS = 4;
    }else if (houseSize === "apartment") {
        houseHoldSizePTS = 2;
    }
    return houseHoldSizePTS
  }
  
 determineHs("large")

