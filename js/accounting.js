'use strict';
let divTable = document.getElementById("divTable");
let table = document.createElement("table")
let employeesArr = JSON.parse(localStorage.getItem("employees"));

function createHeader() {
    let tr = document.createElement("tr");
    divTable.appendChild(tr);

    let depName = document.createElement("th");
    depName.textContent = "Department Name";
    tr.appendChild(depName);

    let numOfEmp = document.createElement("th");
    numOfEmp.textContent = "number of employees";
    tr.appendChild(numOfEmp);

    let totalSalary = document.createElement("th");
    totalSalary.textContent = "total Salary";
    tr.appendChild(totalSalary);

    let averageSalary = document.createElement("th");
    averageSalary.textContent = "average Salary";
    tr.appendChild(averageSalary);

}
createHeader();

function createBody() {
    let empsInDevelopment = 0;
    let deveSalary = 0;
    let empsInAdministration = 0;
    let adminSalary = 0;
    let empInFinance = 0;
    let financeSalary = 0;
    let empInMarketing = 0;
    let marketingSalary = 0;
    let totalEmp = 0;
    let totalSalary = 0

    for (let i = 0; i < employeesArr.length; i++) {
        if (employeesArr[i].department === "Development") {
            empsInDevelopment += 1;
            totalEmp += 1;
            deveSalary += employeesArr[i].salary;
            totalSalary += employeesArr[i].salary;
        }
        else if (employeesArr[i].department === "Administration") {
            empsInAdministration += 1;
            totalEmp += 1;
            adminSalary += employeesArr[i].salary;
            totalSalary += employeesArr[i].salary;
        }
        else if (employeesArr[i].department === "Finance") {
            empInFinance += 1;
            totalEmp += 1;
            financeSalary += employeesArr[i].salary;
            totalSalary += employeesArr[i].salary;

        }
        else {
            empInMarketing += 1;
            totalEmp += 1;
            marketingSalary += employeesArr[i].salary;
            totalSalary += employeesArr[i].salary;

        }
    }
    let arr = ["Development", empsInDevelopment, deveSalary, deveSalary / empsInDevelopment];

    let tr = document.createElement("tr");
    divTable.append(tr);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr[i]}`;
        tr.appendChild(dep4);

    }

    let arr2 = ["Administration", empsInAdministration, adminSalary, adminSalary / empsInAdministration]
    let tr2 = document.createElement("tr");
    divTable.append(tr2);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr2[i]}`;
        tr2.appendChild(dep4);
    }

    let arr3 = ["Finance", empInFinance, financeSalary, financeSalary / empInFinance];
    let tr3 = document.createElement("tr");
    divTable.append(tr3);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr3[i]}`;
        tr3.appendChild(dep4);
    }

    let arr4 = ["Marketing", empInMarketing, marketingSalary, marketingSalary / empInMarketing]

    let tr4 = document.createElement("tr");
    divTable.append(tr4);

    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr4[i]}`;
        tr4.appendChild(dep4);
    }


    let arr5 = ["Total", totalEmp, totalSalary, totalSalary / totalEmp];

    let tr5 = document.createElement("tr");
    divTable.append(tr5);
    for (let i = 0; i < arr.length; i++) {

        let dep4 = document.createElement("td");
        dep4.textContent = `${arr5[i]}`;
        tr5.appendChild(dep4);
    }
};
createBody();
