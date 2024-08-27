function determineHouseHoldPts(numberInhousehold) {
  console.log("inside the function");
  if (numberInhousehold === 0) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInhousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInhousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInhousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInhousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInhousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInhousehold > 5) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }
  console.log( `based on the number of member of the household of ${numberInhousehold} the points would be ${carbonFootprintPoints}.` );
}

let carbonFootprintPoints = 0;
const numberInhousehold = 3;

// global scope

determineHouseHoldPts(3);
determineHouseHoldPts(4);

//To construct this new function, I used the previous function from our carbon challenge, and replaced them with this weeks challenge

let houseNumber = 0;

function determineHs(houseSize) {
  if (houseSize === "large") {
    houseNumber = houseNumber + 10;
  } else if (houseSize === "medium") {
    houseNumber = houseNumber + 7;
  } else if (houseSize === "small") {
    houseNumber = houseNumber + 4;
  }else if (houseSize === "apartment") {
    houseNumber = houseNumber + 2;
  }
  console.log(`Based solely on the size of your house: ${houseSize}, the amount of point from this is ${houseNumber}.`)
}

determineHs("large")