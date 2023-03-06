let topPNWStocks = [
    {
        company: "Microsoft",
        market_cap: 387.1,
        sales : 86.6,
        profit : 22.1,
        employees: 128000
    },
    {
        company: "Symetra Financial ",
        market_cap: 2.7,
        sales : 2.2,
        profit : .254,
        employees: 1400
    },
    {
        company: "Micron Technology",
        market_cap: 37.6,
        sales : 16.4,
        profit : 3,
        employees: 30400
    },
    {
        company: "F5 Network",
        market_cap: 10.8,
        sales : 1.7,
        profit : .311,
        employees: 3834
    },
    {
        company: "Expedia",
        market_cap: 10.8,
        sales : 5.8,
        profit : .398,
        employees: 18210
    },
    {
        company: "Nautilus",
        market_cap: .476,
        sales : .274,
        profit : .018,
        employees: 340
    },
    {
        company: "Heritage Financial",
        market_cap: .531,
        sales : .137,
        profit : .021,
        employees: 748
    },
    {
        company: "Cascade Microtech",
        market_cap: .239 ,
        sales : .019,
        profit : .136,
        employees: 449
    },
    {
        company: "Nike",
        market_cap: 81.3,
        sales : 27.8,
        profit : 2.7,
        employees: 56500
    },
    {
        company: "Alaska Air Group",
        market_cap: 7.9,
        sales : 5.4,
        profit : .605,
        employees: 13952
    },
]

let tableBody = document.querySelector("tbody");

// loop through the stocks array and create a row for each one
topPNWStocks.forEach(function(stock) {
  // create a new table row element
  let row = document.createElement("tr");

  // create a new cell for each property and add it to the row
  let companyNameCell = document.createElement("td");
  companyNameCell.innerText = stock.company;
  row.appendChild(companyNameCell);

  let marketCapCell = document.createElement("td");
  marketCapCell.innerText = stock.market_cap;
  row.appendChild(marketCapCell);

  let salesCell = document.createElement("td");
  salesCell.innerText = stock.sales;
  row.appendChild(salesCell);

  let profitCell = document.createElement("td");
  profitCell.innerText = stock.profit;
  row.appendChild(profitCell);

  let employeesCell = document.createElement("td");
  employeesCell.innerText = stock.employees;
  row.appendChild(employeesCell);

  // add the new row to the table body
  tableBody.appendChild(row);
});