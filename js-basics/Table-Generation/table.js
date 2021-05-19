let mountains = [
    { Name: "Monte Falco", Height: 1658, Place: "Parco Foreste Casentinesi" },
    { Name: "Monte Falterona", Height: 1654, Place: "Parco Foreste Casentinesi" },
    { Name: "Poggio Scali", Height: 1520, Place: "Parco Foreste Casentinesi" },
    { Name: "Pratomagno", Height: 1592, Place: "Parco Foreste Casentinesi" },
    { Name: "Monte Amiata", Height: 1738, Place: "Siena" }
  ];

  function generateTableHead(table,data){
      let thead = table.createTHead();
      let row = thead.insertRow();
      for(let key of data){
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
      }
  }
  function generateTable(table, data){
      for(let element of data){
          let row = table.insertRow();
          for(key in element){
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);            
              cell.appendChild(text);
          }
      }
  }

  let table = document.getElementById("jsTable");
  let data = Object.keys(mountains[0]);
  generateTableHead(table,data);
  generateTable(table, mountains);
  