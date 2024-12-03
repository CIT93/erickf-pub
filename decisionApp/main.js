import {FORM} from "./global.js"
import {getLS, saveLS} from "./localdata.js"
import {renderTable} from "./render.js"
import {APP} from "./app.js"

let orderData = getLS() || [];

const menuItems = {
  meat: {
    CHICKEN: { price: 6.95 },
    STEAK: { price: 7.95 },
    SHRIMP: { price: 8.95 },
  },
  rice: {
    FRIEDRICE: { price: 1.0 },
    STEAMRICE: { price: 0.5 },
  },
};

const grabMeatPrice = (meatType, menu) => {
  if (menu.meat[meatType]) {
    return menu.meat[meatType].price;
  } else {
    return 0;
  }
};

const grabRicePrice = (riceType, menu) => {
  if (menu.rice[riceType]) {
    return menu.rice[riceType].price;
  } else {
    return 0;
  }
};

const calcTotal = (meatType, riceType, menu) => {
  const meatPrice = grabMeatPrice(meatType, menu);
  const ricePrice = grabRicePrice(riceType, menu);
  return meatPrice + ricePrice;
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const meatType = FORM.meatType.value; 
  const riceType = FORM.riceType.value; 
  const pickupTime = FORM.pickupTime.value;
  const appObj = new APP (meatType, riceType, menuItems)
  const totalPrice = calcTotal(meatType, riceType, menuItems);
  const order = { 
    meatType: meatType,
    riceType: riceType,
    totalPrice: totalPrice,
    pickupTime: pickupTime,
  };
  orderData.push({ ...order});
  saveLS(orderData)
  renderTable(orderData)
  FORM.reset();
}); 
 