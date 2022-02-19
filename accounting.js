'use strict';


let table = document.getElementById("table");

function renderHeader() {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let department = document.createElement("th");
    department.textContent = "Department";
    tr.appendChild(department);

    let numOfEmpl = document.createElement("th");
    numOfEmpl.textContent = "#Of employee";
    tr.appendChild(numOfEmpl);

    let totalSalary = document.createElement("th");
    totalSalary.textContent = "Total salary";
    tr.appendChild(totalSalary);

    let averageSalary = document.createElement("th");
    averageSalary.textContent = "Average salary";
    tr.appendChild(averageSalary);
};

// function renderTableBody() {
//     let tr = document.createElement("tr");
//     table.appendChild(tr);

//     let nameCell1 = document.createElement("th");
//     nameCell1.textContent = "Administration";
//     tr.appendChild(nameCell1);

// };

// function renderBody() {
//     table.innerHTML = "";
//     renderHeader();
//     for (let i = 0; i < allEmployees.length; 1++) {
//         allEmployees[i].renderTableBody();
//     }
// };

/*
let empNum = document.createElement("td");
    empNum.textContent = num;
    tr.appendChild(empNum);

    let totalSalary = document.createElement("td");
    totalSalary.textContent = this.totalSalary;
    tr.appendChild(totalSalary);

    let averageSalary = document.createElement("td");
    averageSalary.textContent = this.averageSalary;
    tr.appendChild(averageSalary);
*/

renderHeader();
renderTableBody();