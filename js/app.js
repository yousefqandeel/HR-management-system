'use strict';

let allEmployees = [];
let form = document.getElementById("dataForm");
let employeeArea = document.getElementById("employeeArea");
function Employees(ID, fullName, department, level, image) {
    this.ID = ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.gitRandomSalary();
    this.randSalary();
    allEmployees.push(this);

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
    id.textContent = `-ID: ${this.ID}`;
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
    this.randomSalary = this.salary - (this.salary * 0.075);
};
Employees.prototype.randID = function () {
    this.ID = Math.floor(1000 + Math.random() * 9000);
}

function display() {
    let ghazi = new Employees(1000, "Ghazi Samer", "Administration ", "Senior", "./photos/Ghazi.jpg");
    let lana = new Employees(1001, "Lana Ali", "Finance ", "Senior", "./photos/Lana.jpg");
    let tamara = new Employees(1002, "Tamara Ayoub", "Marketing", "Senior", "./photos/Tamara.jpg");
    let saif = new Employees(1003, "Safi Walid", "Administration", "Mid-Senior", "./photos/Safi.jpg");
    let omar = new Employees(1004, "Omar Zaid	", "Development", "Senior", "./photos/Omar.jpg");
    let rana = new Employees(1005, "Rana Saleh", "Development ", "Junior", "./photos/Rana.jpg");
    let hadi = new Employees(1005, "Hadi Ahmad", "Finance ", "Mid-Senior", "./photos/Hadi.jpg");


    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].render();
    }
};
display();
form.addEventListener("submit", handelSubmit)

function handelSubmit(event) {

    event.preventDefault();
    let fullName = event.target.name.value;
    let department = event.target.sellect.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let newEmployee = new Employees(0, fullName, department, level, image, 0);
    newEmployee.randID();
    newEmployee.randSalary();
    renderAll();
    form.reset();

};
function renderAll() {
    employeeArea.innerHTML = "";
    for (let i = 0; i < allEmployees.length; i++) {

        allEmployees[i].render();
    }
};
renderAll();