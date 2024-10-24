import {FORM, TBL} from "./global.js"
import {getLS, saveLS} from "./storage.js"

const renderTblHeading = function() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "HouseHold",
    "HouseSize",
    "Food Choice",
    "Footprint",
    "Actions",
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
    FORM[2].value = obj.last
    FORM[3].value = data[index].houseMembers;
    FORM[4].value = obj.houseSize
    FORM[5].value = data[index].lifeStyleChoice;
    onUpdate(index, data);
  });
  return td;
}

const renderTblRow = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key === "first" || key === "houseMembers" || key === "houseSize" || key === "lifeStyleChoice" || key === "total") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

const renderTbl = function(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) { //MDN  and chat helped with this one, although I did get stuck when I put === instead -f !== the code would not run. 
    const table = renderTblHeading();
    const tbody = renderTblRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}

const dataLS = function() {
  const data = getLS()
  renderTbl(data)
}

export { renderTbl, renderTblHeading };