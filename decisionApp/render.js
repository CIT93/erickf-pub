import { FORM , TBL} from "./global.js";
import { saveLS, orderData } from "./localdata.js";

  const renderTHeading = () => {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = [
      "Meat Type",
      "Rice Type",
      "Total Price",
      "Pickup Time",
      "Actions",
    ];
  
    headingTextArr.forEach(text => {
      const th = document.createElement("th")
      th.textContent = text;
      tr.appendChild(th)
    })
    thead.appendChild(tr)
    table.appendChild(thead)
    return table
  };

  
  const renderTButton = function(index, data) {
    const td = document.createElement("td");
    const buttonEdit = document.createElement("button");
    const buttonDel = document.createElement("button");
    buttonEdit.textContent = "Edit";
    buttonDel.textContent = "Del";
    buttonDel.addEventListener("click", function (e) {
      data.splice(index, 1);
      saveLS(data);
      renderTable(data);
    });
    buttonEdit.addEventListener("click", () => {
      const order = data[index];
      FORM.meatType.value = order.meatType;
      FORM.riceType.value = order.riceType;
      FORM.pickupTime.value = order.pickupTime;
      data.splice(index, 1);
      saveLS(data);
      renderTable(data);
    });
    td.appendChild(buttonEdit);
    td.appendChild(buttonDel);
    return td;
  }; 


  const renderTRow = (data) => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
      const tr = document.createElement("tr");
      const keys = ["meatType", "riceType", "totalPrice", "pickupTime"];
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      });
      const td = renderTButton(index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
    return tbody;
  }
  
  
  
  const renderTable = (data) => {
    TBL.innerHTML ="";
    if (data.length !== 0) {
      const tbody = renderTRow(data);
      const thead = renderTHeading();
      TBL.appendChild(thead)
      TBL.appendChild(tbody)
    }
  }
  
  const onUpdate = (index,data) => {
      data.splice(index, 1);
      saveLS(data);
      renderTable(data);
    }
  
  renderTable(orderData);

  export {renderTable}
  