(function() {
    // Define personal information
    const personalInfo = [
      { name: "Name", value: "Gurjot Singh" },
      { name: "Age", value: "20" },
      { name: "Address", value: "Punjab" },
      { name: "Phone", value: "9999988888" },
      { name: "Email", value: "guru@sample.com" }
    ];
    
    // Create table element
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
  
    // Create table headers
    const headerRow = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      const headerCell = document.createElement("th");
      headerCell.style.border = "2px solid black";
      headerCell.style.padding = "12px";
      headerCell.style.fontWeight = '600';
      headerCell.style.fontSize = '30px';
      headerCell.style.textAlign = 'center';
      const textCell = document.createTextNode(personalInfo[i].name);
      headerCell.appendChild(textCell);
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
  
    // Create table rows
    for (let i = 0; i < 5; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        const cell = document.createElement("td");
        cell.style.border = "2px solid black";
        cell.style.padding = "10px";
        cell.style.fontSize = '20px';
        cell.style.textAlign = 'center';
        const textCell = document.createTextNode(personalInfo[j].value);
        cell.appendChild(textCell);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  
    // Add table to the document
    document.body.appendChild(table);
})();