'use strict';

let empl = localStorage.getItem('employee');
let parseempl = JSON.parse(emp1);
let Adm = 0;
let Dev = 0, Mar = 0, Fin = 0, av = 0, av1 = 0, av2 = 0, av3 = 0, sum = 0, sum1 = 0, sum2 = 0, sum3 = 0, alls = 0;
let table = document.getElementById("table");
let allEmployees = [];

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
function renderTableBody() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let department = document.createElement("th");
    department.textContent = this.department;
    tr.appendChild(department);

    let salary = document.createElement("td");
    salary.textContent = this.salary;
    tr.appendChild(salary);
};

function renderBody() {
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].renderTableBody();
    }
}
renderHeader();
renderBody();
function renderTableBody() {

    let Dep = new Array("Administration", "Marketing", "Development", "Finance");

    for (let i = 0; i < parseempl.length; i++) {
        alls += parseempl[i].salary;
        switch (parseempl[i].Department) {
            case "Administration":
                Adm = Adm + 1;
                sum += parseempl[i].salary;
                av = sum / Adm;
                break;
            case "Marketing":
                {
                    Mar++;;
                    sum1 += parseempl[i].salary;
                    av1 = sum1 / Mar;
                    break;
                }
            case "Development":
                Dev++;
                sum2 += parseempl[i].salary;
                av2 = sum2 / Dev;
                break;
            case "Finance":
                Fin = Fin + 1;
                sum3 += parseempl[i].salary;
                av3 = sum3 / Fin;
                break;

        }

    }
    let Dev = 0, Mar = 0, Fin = 0, av = 0, av1 = 0, av2 = 0, av3 = 0, sum = 0, sum1 = 0, sum2 = 0, sum3 = 0, alls = 0;
    for (let i = 0; i < deplength; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        let department = document.createElement("td");
        department.textContent = Dep[i];
        tr.appendChild(department);

        let fill = document.createElement("td");
        if (Dep[i] == "Administration") {
            fill.textContent = Adm;
        }
        else if (Dep[i] == "Marketing") {
            fill.textContent = Mar;
        }
        else if (Dep[i] == "Development") {
            fill.textContent = Dev;
        }
        else if (Dep[i] == "Finance") {
            fill.textContent = Fin;

        }
        tr.appendChild(fill)
        let avr = document.createElement("td");
        if (Dep[i] == "Administration") {
            avr.textContent = avr;
        }
        else if (Dep[i] == "Marketing") {
            avr.textContent = avr1;
        }
        else if (Dep[i] == "Development") {
            avr.textContent = avr2;
        }
        else if (Dep[i] == "Finance") {
            avr.textContent = avr3;
        }
        tr.appendChild(fill)

        let num = document.createElement("td");
        if (Dep[i] == "Administration") {
            num.textContent = sum;
        }
        else if (Dep[i] == "Marketing") {
            num.textContent = sum1;
        }
        else if (Dep[i] == "Development") {
            num.textContent = sum2;
        }
        else if (Dep[i] == "Finance") {
            num.textContent = sum3;
        }
        tr.appendChild(fill);
    }
    function tfoot() {
        let tfoot = document.createElement("tfoot");
        table = appendChild(tfoot);
        let trallem = document.createElement("tr");
        trallem.textContent = "The total number of employees " + parseempl.length;
        tfoot.appendChild(trallem);
        let trallsa = document.createElement("tr");
    }
}

renderHeader();
renderTableBody();
tfoot();