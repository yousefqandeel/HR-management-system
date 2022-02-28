'use strict';

let divID = document.getElementById("tableDiv");
let table = document.createElement("table");

function createTable() {
    divID.appendChild(table);
}

function tableHeader() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let th = document.createElement("th");
    th.textContent = "Department Name";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "# Department";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Total salary";
    tr.appendChild(th);
    th = document.createElement("th");
    th.textContent = "Average salary of the department";
    tr.appendChild(th);
}

function tableBody() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let td = document.createElement("td");
    td.textContent = "Administration";
    tr.appendChild(td);
    let td1 = document.createElement("td");
    td1.textContent = calculateNumberOfDepartment("Administration");
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = calculateTotalSalary("Administration");
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = calculateTotalSalary("Administration") / calculateNumberOfDepartment("Administration");
    tr.appendChild(td3);

    let tr1 = document.createElement("tr");
    table.appendChild(tr1);
    td = document.createElement("td");
    td.textContent = "Finance";
    tr1.appendChild(td);
    td1 = document.createElement("td");
    td1.textContent = calculateNumberOfDepartment("Finance");
    tr1.appendChild(td1);
    td2 = document.createElement("td");
    td2.textContent = calculateTotalSalary("Finance");
    tr1.appendChild(td2);
    td3 = document.createElement("td");
    td3.textContent = calculateTotalSalary("Finance") / calculateNumberOfDepartment("Finance");
    tr1.appendChild(td3);

    let tr2 = document.createElement("tr");
    table.appendChild(tr2);
    td = document.createElement("td");
    td.textContent = "Marketing";
    tr2.appendChild(td);
    td1 = document.createElement("td");
    td1.textContent = calculateNumberOfDepartment("Marketing");
    tr2.appendChild(td1);
    td2 = document.createElement("td");
    td2.textContent = calculateTotalSalary("Marketing");
    tr2.appendChild(td2);
    td3 = document.createElement("td");
    td3.textContent = calculateTotalSalary("Marketing") / calculateNumberOfDepartment("Marketing");
    tr2.appendChild(td3);

    let tr3 = document.createElement("tr");
    table.appendChild(tr3);
    td = document.createElement("td");
    td.textContent = "Development";
    tr3.appendChild(td);
    td1 = document.createElement("td");
    td1.textContent = calculateNumberOfDepartment("Development");
    tr3.appendChild(td1);
    td2 = document.createElement("td");
    td2.textContent = calculateTotalSalary("Development");
    tr3.appendChild(td2);
    td3 = document.createElement("td");
    td3.textContent = calculateTotalSalary("Development") / calculateNumberOfDepartment("Development");
    tr3.appendChild(td3);

}

function createTableFooter() {
    let footer = document.createElement("footer");
    footer.setAttribute("id", "tableFooter");
    table.appendChild(footer);
    divID.appendChild(footer);
    let tr = document.createElement("tr");
    tr.setAttribute("id", "styleTr");
    table.appendChild(tr);
    let th = document.createElement("th");
    th.textContent = "Total";
    tr.appendChild(th);

    th = document.createElement("th");
    th.textContent = totalNumberDepartment();
    tr.appendChild(th);

    th = document.createElement("th");
    th.textContent = totalSalaryDepartment();
    tr.appendChild(th);

    th = document.createElement("th");
    th.textContent = totalSalaryDepartment() / totalNumberDepartment();
    tr.appendChild(th);
}

function calculateNumberOfDepartment(department) {
    let numberOfDepartment = 0;
    let employee = localStorage.getItem("employee");
    let parseEmployee = JSON.parse(employee);
    switch (department) {
        case "Administration":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    numberOfDepartment++;
                }
            }
            break;
        case "Finance":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    numberOfDepartment++;
                }
            }
            break;
        case "Marketing":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    numberOfDepartment++;
                }
            }
            break;
        case "Development":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    numberOfDepartment++;
                }
            }
            break;
        default: null;
            break;
    }
    return numberOfDepartment;
}


function calculateTotalSalary(department) {
    let totalSalary = 0;
    let employee = localStorage.getItem("employee");
    let parseEmployee = JSON.parse(employee);
    switch (department) {
        case "Administration":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    totalSalary += parseEmployee[i].salary;
                }
            }
            break;
        case "Finance":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    totalSalary += parseEmployee[i].salary;
                }
            }
            break;
        case "Marketing":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    totalSalary += parseEmployee[i].salary;
                }
            }
            break;
        case "Development":
            for (let i = 0; i < parseEmployee.length; i++) {
                if (parseEmployee[i].department == department) {
                    totalSalary += parseEmployee[i].salary;
                }
            }
            break;
        default: null;
            break;
    }
    return totalSalary;
}
function totalNumberDepartment() {
    let employee = localStorage.getItem("employee");
    let parseEmployee = JSON.parse(employee);
    return parseEmployee.length;
}
function totalSalaryDepartment() {
    let totalSalary = 0;
    let employee = localStorage.getItem("employee");
    let parseEmployee = JSON.parse(employee);
    for (let i = 0; i < parseEmployee.length; i++) {
        totalSalary += parseEmployee[i].salary;
    }
    return totalSalary;
}
createTable();
tableHeader();
tableBody();
createTableFooter();