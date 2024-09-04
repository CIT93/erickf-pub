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

 function start (houseHoldMembers, houseSize) {
     const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
     const houseHoldSizePTS = determineHs(houseSize);
     const total = houseHoldPTS + houseHoldSizePTS;
     cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseHoldSizePTS, total]);
  }
  
  function displayOutput() {

  }

  start(5, "apartment");
  start(4, "large");
  start(3, "medium");
  start(2, "small");

  displayOutput()

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

