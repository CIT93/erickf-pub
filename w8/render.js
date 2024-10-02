const TBL = document.getElementById("tab-data");

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

function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const buttonEdit = document.createElement("button");
  const buttonDel = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonDel.textContent = "Del";
  td.appendChild(buttonEdit);
  td.appendChild(buttonDel);
  buttonDel.addEventListener("click", function (e) {
    console.log("Hello from inside the delete button");
    console.log(e);
    data.splice(index, 1);
    renderTbl(data);
  });
  buttonEdit.addEventListener("click", function (e) {
    FORM[0].value = data[index].firstname
    FORM[1].value = data[index].hMem
    FORM[2].value = data[index].hSize
    FORM[3].value = data[index].footprint
    data.splice(index, 1);
  });
  return td;
}
//First question: Why do you add console.log(e) after the first console.log?
//Second question: For splicing on the MDN webpage it formats it as months.splice(1, 0, feb). the '1' is the place in the array where it is put, and the '0' is the amount of replacements of an element correct?

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
    const td = renderTblBtn(index, data);
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

export { renderTbl, renderTblHeading };
