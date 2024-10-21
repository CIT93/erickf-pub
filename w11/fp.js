class FP {
    constructor(first, last, houseMembers, houseSize, lifestyleChoice) {
      this.first = first;
      this.houseMembers = houseMembers;
      this.houseSize = houseSize;
      this.lifestyleChoice = lifestyleChoice
      this.last = last;
      this.houseHoldPoints();
      this.houseSizePoints();
      this.lifestyleChoicePoints();
      this.total();
    }
    houseHoldPoints() {
      if (this.houseMembers === 0) {
        this.houseHoldPoints = 14;
      } else if (this.houseMembers === 1) {
        this.houseHoldPoints = 12;
      } else if (this.houseMembers === 2) {
        this.houseHoldPoints = 10;
      } else if (this.houseMembers === 3) {
        this.houseHoldPoints = 8;
      } else if (this.houseMembers === 4) {
        this.houseHoldPoints = 6;
      } else if (this.houseMembers === 5) {
        this.houseHoldPoints = 4;
      } else if (this.houseMembers > 5) {
        this.houseHoldPoints = 2;
      }
    }
    houseSizePoints() {
      if (this.houseSize === "Large") {
        this.houseSizePoints = 10;
      } else if (this.houseSize === "Medium") {
        this.houseSizePoints = 7;
      } else if (this.houseSize === "Small") {
        this.houseSizePoints = 4;
      } else if (this.houseSize === "Apartment") {
        this.houseSizePoints = 2;
      }
    }
    lifestyleChoicePoints() {
    if (this.lifestyleChoice === "Eat Meat Daily") {
        this.lifestyleChoicePoints = 10;
      } else if (this.lifestyleChoice === "Eat Meat Weekly") {
        this.lifestyleChoicePoints = 8;
      } else if (this.lifestyleChoice === "Vegetarian") {
        this.lifestyleChoicePoints = 4;
      } else if (this.lifestyleChoice === "Vegan") {
        this.lifestyleChoicePoints = 2;
      } else if (this.lifestyleChoice === "Prepackaged Convenience Food") {
        this.lifestyleChoicePoints = 12;
      } else if (this.lifestyleChoice === "Balance of Both") {
        this.lifestyleChoicePoints = 6;
      } else if (this.lifestyleChoice === "Fresh or Local Only") {
            this.lifestyleChoicePoints = 2;
      }
    }
    total() {
    this.total = this.houseHoldPoints + this.houseSizePoints + this.lifestyleChoicePoints;
}
  }
  //Tried to replicate the example from earlier but replaced it with our CFP
  
  export { FP };