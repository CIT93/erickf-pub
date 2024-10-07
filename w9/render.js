import {FORM, TBL} from "./global.js"
import {getLS, saveLS} from "./storage.js"

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "HouseHold",
    "HouseSize",
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

function onUpdate(index,data) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);

}

function renderTblBtn(obj, index, data) {
  const td = document.createElement("td");
  const buttonEdit = document.createElement("button");
  const buttonDel = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonDel.textContent = "Del";
  td.appendChild(buttonEdit);
  td.appendChild(buttonDel);
  buttonDel.addEventListener("click", function (e) {
    onUpdate(index, data);
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
  });
  buttonEdit.addEventListener("click", function (e) {
    FORM[1].value = obj.firstName
    FORM[2].value = obj.lastName
    FORM[3].value = obj.hHM
    FORM[4].value = obj.hS
    onUpdate(index, data);
  });
  return td;
}
function renderTblRow(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "hHPTS" && key !== "hHSPTS") {
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

function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) { //MDN  and chat helped with this one, although I did get stuck when I put === instead -f !== the code would not run. 
    const table = renderTblHeading();
    const tbody = renderTblRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}

function dataLS() {
  const data = getLS()
  renderTbl(data)
}

export { renderTbl, renderTblHeading };
