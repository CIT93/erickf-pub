import {FORM, TBL} from "./global.js"
import {getLS, saveLS} from "./storage.js"

const renderTblHeading = function() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("id", "table-id")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "First",
    "Last",
    "Footprint Total",
    "Actions"
  ];

  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

const onUpdate = function(index, data) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
}

const renderTblBtn = function(obj, index, data) {
  const td = document.createElement("td");
  const buttonEdit = document.createElement("button");
  const buttonDel = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonDel.textContent = "Del";
  td.appendChild(buttonEdit);
  td.appendChild(buttonDel);
  buttonDel.addEventListener("click", function (e) {
    onUpdate(index, data);
  });
  buttonEdit.addEventListener("click", function (e) {
    FORM[1].value = data[index].first;
    FORM[2].value = data[index].last;
    FORM[3].value = data[index].houseMembers;
    FORM[4].value = data[index].houseSize
    FORM[5].value = data[index].lifestyleChoice;
    FORM[6].value = data[index].foodSource
    FORM[7].value = data[index].waterConsumptionPoints
    FORM[8].value = data[index].purchasePoints
    onUpdate(index, data);
  });
  return td;
}

const renderTblRow = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    const keys = [ "first", "last", "total"]
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      })
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}


const calculateAvg = (data) => {
  const reduceTotal = data.reduce ((sum, ea) => sum + ea.total, 0)
  const tableRef = document.getElementById("table-id")
  let newTR = tableRef.insertRow(-1)
  let newTD = newTR.insertCell(0)
  let newTD_1 = newTR.insertCell(0)
  let newTD_2 = newTR.insertCell(0)
//   let newTD_3 = newTR.insertCell(0)
//   let newTD_4 = newTR.insertCell(0)
  let newLabl = document.createTextNode(`Average Total`)
  let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`)
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);
}

const renderTbl = function(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(data);
  }
}

const dataLS = function() {
  const data = getLS()
  renderTbl(data)
}

export { renderTbl, renderTblHeading };
