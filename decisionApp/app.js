class APP {
    constructor(menu, meatType, riceType, pickupTime, totalPrice) {
      this.menuItems = menu;
      this.meatType = meatType;
      this.riceType = riceType;
      this.pickupTime = pickupTime;
      this.totalPrice = totalPrice;
      this.total();
    }
    grabMeatPrice = (meatType, menu) => {
      if (menu.meat[meatType]) {
        return menu.meat[meatType].price;
      } else {
        return 0;
      }
    };
  
    grabRicePrice = (riceType, menu) => {
      if (menu.rice[riceType]) {
        return menu.rice[riceType].price;
      } else {
        return 0;
      }
    };
  
    calcTotal = (meatType, riceType, menu) => {
      const meatPrice = grabMeatPrice(meatType, menu);
      const ricePrice = grabRicePrice(riceType, menu);
      return meatPrice + ricePrice;
    };
  
    total() {
      this.total =
        this.meatType + this.riceType;
    }
  }
  
  export { APP };
  