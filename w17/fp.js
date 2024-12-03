class FP {
    constructor(
      first,
      last,
      houseMembers,
      houseSize,
      lifestyleChoice,
      foodSource,
      waterConsumption,
      purchase,
      waste,
      recycle,
      miles,
      public,
      flight
    ) {
      this.first = first;
      this.houseMembers = houseMembers;
      this.houseSize = houseSize;
      this.lifestyleChoice = lifestyleChoice;
      this.last = last;
      this.foodSource = foodSource;
      this.waterConsumptionPoints = waterConsumption;
      this.purchasePoints = purchase
      this.wastePoints = waste
      this.recyclePoints = recycle
      this.milesPoints = miles
      this.publicPoints = public
      this.flightPoints = flight
      this.calHouseHoldPoints();
      this.calHouseSizePoints();
      this.calFoodSourcePoints();
      this.calLifestyleChoicePoints();
      this.calTotal();
    }
    calHouseHoldPoints() {
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
    calHouseSizePoints() {
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
    calLifestyleChoicePoints() {
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
  
    calFoodSourcePoints() {
      if (this.foodSource === "Prepackaged Convenience food") {
        this.foodSourcePoints = 12;
      } else if (this.foodSource === "Balance of Fresh and Convenience Food") {
        this.foodSourcePoints = 6;
      } else if (this.foodSource === "Only Eat Fresh Locally Grown Food, or Hunted Food"
      ) { this.foodSourcePoints = 2;
      }
    }

    

  
    
  
    calTotal() {
      this.total =
        this.houseHoldPoints +
        this.houseSizePoints +
        this.lifestyleChoicePoints +
        this.foodSourcePoints +
        this.waterConsumptionPoints +
        this.purchasePoints + 
        this.wastePoints +
        this.recyclePoints + 
        this.milesPoints +
        this.publicPoints +
        this.flightPoints
    }
  }
  
  export { FP };
  