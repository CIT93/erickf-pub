const saveLS = function(orderData) {
    const serializedArr = JSON.stringify(orderData);
    localStorage.setItem("orderData", serializedArr);
}

const getLS = function(orderData) {
    const retrievedArr = localStorage.getItem("orderData");
    if(retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
};
const orderData = getLS();
export{orderData, saveLS, getLS};