const TBL = document.getElementById("tab-data")
function renderTblHeading (){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  }
  function renderTbl(data){
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const trTextArr = ["Erick", 3, "Large", 20];
    trTextArr.forEach(function (text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
    const td = document.createElement("td");
    const buttonEdit = document.createElement("button");
    const buttonDel = document.createElement("button");
    buttonDel.textContent = "Del";
    buttonEdit.textContent = "Edit";

    td.appendChild(buttonEdit);
    td.appendChild(buttonDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
  function determineHouseHoldPts(numberInhousehold) {
    let houseHoldPoints = 0;
    if (numberInhousehold === 0) {
      houseHoldPoints = 14;
    } else if (numberInhousehold === 1) {
        houseHoldPoints = 12;
    } else if (numberInhousehold === 2) {
        houseHoldPoints = 10;
    } else if (numberInhousehold === 3) {
        houseHoldPoints = 8;
    } else if (numberInhousehold === 4) {
        houseHoldPoints = 6;
    } else if (numberInhousehold === 5) {
        houseHoldPoints = 4;
    } else if (numberInhousehold > 5) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints
  }
  function start(houseHoldMembers, houseSize, firstname, lastname) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseHoldSizePTS = determineHs(houseSize);
    const total = houseHoldPTS + houseHoldSizePTS;
    cfpData.push({
      hHM: houseHoldMembers,
      hS: houseSize,
      hHPTS: houseHoldPTS,
      hHSPTS: houseHoldSizePTS,
      cfpTotal: total,
      firstName: firstname,
      lastName: lastname,
    });
  }
  export {renderTbl, renderTblHeading};
  export {determineHouseHoldPts, start}