'use strict';

let allEmployees = [];
let form = document.getElementById("dataForm");
let employeeArea = document.getElementById("employeeArea");
function Employees(ID, fullName, department, level, image, salary) {
    this.ID = ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = salary;

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
            this.salary = getRandomArbitrary(500, 1000);
            break;
        case "Mid-Senior":
            this.salary = getRandomArbitrary(1000, 1500);
            break;
        default:
            this.salary = getRandomArbitrary(1500, 2000);
    }
}
function getRandomArbitrary(min, max) {
    if (min < max)

        return Math.ceil(Math.random() * (max - min) + min) * 0.075;

    else
        return "wrong entry";
};
Employees.prototype.randID = function () {
    this.ID = Math.floor(1000 + Math.random() * 9000);
}

function display() {
    let ghazi = new Employees(1000, "Ghazi Samer", "Administration ", "Senior", "Ghazi.jpg", getRandomArbitrary(1500, 2000));
    let lana = new Employees(1001, "Lana Ali", "Finance ", "Senior", "Lana.jpg", getRandomArbitrary(1500, 2000));
    let tamara = new Employees(1002, "Tamara Ayoub", "Marketing", "Senior", "Tamara.jpg", getRandomArbitrary(1500, 2000));
    let saif = new Employees(1003, "Safi Walid", "Administration", "Mid-Senior", "Safi.jpg", getRandomArbitrary(1000, 1500));
    let omar = new Employees(1004, "Omar Zaid	", "Development", "Senior", "Omar.jpg", getRandomArbitrary(1500, 2000));
    let rana = new Employees(1005, "Rana Saleh", "Development ", "Junior", "Rana.jpg", getRandomArbitrary(500, 1000));
    let hadi = new Employees(1005, "Hadi Ahmad", "Finance ", "Mid-Senior", "Hadi.jpg", getRandomArbitrary(1000, 1500));


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
