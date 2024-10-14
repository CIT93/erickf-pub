const determineHouseHoldPts = (numberInhousehold = 0 ) => {
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
  const determineHs = (houseSize = "Apartment")=>{
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
  export {determineHouseHoldPts, determineHs}