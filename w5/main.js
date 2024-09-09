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

 function start (houseHoldMembers, houseSize) {
     const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
     const houseHoldSizePTS = determineHs(houseSize);
     const total = houseHoldPTS + houseHoldSizePTS;
     cfpData.push({
         hHM: houseHoldMembers,
        hS: houseSize,
        hHPTS: houseHoldPTS,
        hHSPTS: houseHoldSizePTS,
        cfpTotal: total
     });
  }
  
  function displayOutput() {
   for(obj of cfpData){
     console.log(obj)
     const output = document.getElementById("output");
     const newH2 = document.createElement("h2");
     newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
     const newH3 = document.createElement("h3");
     newH3.textContent = `Based  on number in and size of home`;
     const newP = document.createElement("p");
     newP.textContent = `Your household consists of ${obj.hHM} people, your score is ${obj.hHPTS}. The size of your household is ${obj.hS}, the score is ${obj.hHSPTS}. 
     The data that has been provided will update the overall score to ${obj.cfpTotal}. `;
     output.appendChild(newH2);
     output.appendChild(newH3);
     output.appendChild(newP);

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
 

  start(5, "apartment");
  start(4, "large");
  start(3, "medium");
  start(2, "small");

 displayOutput()

  //const cfpData = [{

 // }, {
    
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

