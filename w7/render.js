function renderTblHeading (){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"]
    headingTextArr.forEach(function(text){
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  } 

  function renderTbl(data, table) {
    const tbody = document.createElement("tbody");
    data.forEach(function (item) {
      const tr = document.createElement("tr");
      const properties = [item.firstName, item.hHM, item.cfpTotal, item.lastName];
      properties.forEach(function(text){
        const td = document.createElement("td")
        td.textContent = text;
        tr.appendChild(td)
      });
      const actionTd = document.createElement("td");
      const buttonEdit = document.createElement("button");
      const buttonDel = document.createElement("button");
      buttonDel.textContent = "Del";
      buttonEdit.textContent = "Edit";
      actionTd.appendChild(buttonEdit)
      actionTd.appendChild(buttonDel)
      tr.appendChild(actionTd)
      tbody.appendChild(tr)
    });
    table.appendChild(tbody); 
  }

  export {renderTbl, renderTblHeading,};
 