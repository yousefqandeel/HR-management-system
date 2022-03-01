'use strict';

let allEmployees = [];
let id = 1000;
let form = document.getElementById("dataForm");
let employeeArea = document.getElementById("employeeArea");
function Employees(fullName, department, level, image) {
    this.id = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.gitRandomSalary();
    allEmployees.push(this);
};

Employees.prototype.getID = function () {
    this.id = id++;
};
Employees.prototype.render = function () {
    let div1 = document.createElement("div");
    let div = document.createElement("div");

    div1.classList.add("col");
    employeeArea.appendChild(div);
    div.appendChild(div1);
    div.classList.add("card1");


    let image = document.createElement("img");
    image.setAttribute("src", this.image);
    div.appendChild(image);

    let name = document.createElement("p");
    name.textContent = `Name: ${this.fullName}`;
    div.appendChild(name);

    let id = document.createElement("p");
    id.textContent = `-ID: ${this.id}`;
    div.appendChild(id);

    let department = document.createElement("p");
    department.textContent = `-Department: ${this.department}`;
    div.appendChild(department);

    let level = document.createElement("p");
    level.textContent = `-Level: ${this.level}`;
    div.appendChild(level);

    let salary = document.createElement("p");
    salary.textContent = `-Salary: ${this.salary}`;
    div.appendChild(salary);
};


Employees.prototype.randSalary = function () {
    switch (this.level) {
        case "Junior":
            this.salary = (Math.floor(Math.random() * 500 + 1) + 500);
            break;
        case "Mid-Senior":
            this.salary = (Math.floor(Math.random() * 500 + 1) + 1000);
            break;
        case "Senior":
            this.salary = (Math.floor(Math.random() * 500 + 1) + 1500);
            break;
        default:
            break;
    }
}

Employees.prototype.gitRandomSalary = function () {
    let min = 0;
    let max = 0;
    let empSalary = 0;

    if (this.level === "Junior") {
        max = 1000;
        min = 500;
    }
    else if (this.level === "Mid-Senior") {
        max = 1500;
        min = 1000;
    }
    else {
        max = 2000;
        min = 1500;
    }
    let salary = Math.floor(Math.random() * (max - min + 1) + min);
    empSalary = salary - (salary * 0.075);
    this.salary = empSalary;
};

function display() {
    let ghazi = new Employees("Ghazi Samer", "Administration ", "Senior", "./photos/Ghazi.jpg");
    let lana = new Employees("Lana Ali", "Finance ", "Senior", "./photos/Lana.jpg");
    let tamara = new Employees("Tamara Ayoub", "Marketing", "Senior", "./photos/Tamara.jpg");
    let saif = new Employees("Safi Walid", "Administration", "Mid-Senior", "./photos/Safi.jpg");
    let omar = new Employees("Omar Zaid", "Development", "Senior", "./photos/Omar.jpg");
    let rana = new Employees("Rana Saleh", "Development ", "Junior", "./photos/Rana.jpg");
    let hadi = new Employees("Hadi Ahmad", "Finance ", "Mid-Senior", "./photos/Hadi.jpg");


    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].render();
    }
};
display();

function saveData() {
    let formatData = JSON.stringify(allEmployees);
    localStorage.setItem("employees", formatData);
};

function getData() {
    let employees = localStorage.getItem("employees");
    let parseEmployee = JSON.parse(employees);

    allEmployees = [];
    if (parseEmployee != null) {
        for (let i = 0; i < parseEmployee.length; i++) {
            new Employees(parseEmployee[i].fullName, parseEmployee[i].department, parseEmployee[i].level, parseEmployee[i].image);
        };
    }
    renderAll();
};

form.addEventListener("submit", handelSubmit)

function handelSubmit(event) {

    event.preventDefault();
    let fullName = event.target.name.value;
    let department = event.target.sellect.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let newEmployee = new Employees(fullName, department, level, image);
    newEmployee.getID();
    newEmployee.gitRandomSalary();
    renderAll();
    saveData();
    form.reset();

};

function renderAll() {
    employeeArea.innerHTML = "";
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].getID();
        allEmployees[i].render();
    }
};

renderAll();
getData();