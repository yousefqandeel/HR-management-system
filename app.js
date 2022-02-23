
'use strict';
let allEmployee = [];
let fullNameForm;
let departmentForm;
let levelForm;
let imageURLForm;
let form = document.getElementById("form");
let divID = document.getElementById("showEmployee");
let btn = document.getElementById("submit");
function Employee(fullName, department, level, imageURL) {

    this.generateUniqueID();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    allEmployee.push(this);
    this.calculateRandomSalary();
    this.calculateNetSalary();
}
Employee.prototype.calculateRandomSalary = function () {
    switch (this.level) {
        case "Junior":
            this.salary = (Math.floor(Math.random() * 500) + 500);
            break;
        case "Mid-Senior":
            this.salary = (Math.floor(Math.random() * 500) + 1000);
            break;
        case "Senior":
            this.salary = (Math.floor(Math.random() * 500) + 1500);
            break;

        default:
            break;
    }
}
Employee.prototype.calculateNetSalary = function () {
    this.netSalary = this.salary - (this.salary * (7.5 / 100));
}
Employee.prototype.generateUniqueID = function () {
    if (Array.isArray(allEmployee) && allEmployee.length == 0) {
        this.employeeID = 1000;
    }
    else {
        let indexID = allEmployee.length - 1;
        this.employeeID = (allEmployee[indexID].employeeID) + 1;

    }
}
Employee.prototype.showData = function () {

    let divToShow = document.createElement("div");
    divToShow.id = "Show";
    let imageE = document.createElement("img");
    imageE.setAttribute("src", this.imageURL);
    divToShow.appendChild(imageE);
    let title = document.createElement("h3");
    title.textContent = "Name :" + this.fullName;
    divToShow.appendChild(title);
    let title1 = document.createElement("h3");
    title1.textContent = "ID :" + this.employeeID;
    divToShow.appendChild(title1);
    let title2 = document.createElement("h3");
    title2.textContent = "Department :" + this.department;
    divToShow.appendChild(title2);
    let title3 = document.createElement("h3");
    title3.textContent = "level :" + this.level;
    divToShow.appendChild(title3);
    divID.appendChild(divToShow);


}
form.addEventListener("submit", handelSubmit);
function handelSubmit(event) {
    event.preventDefault();
    fullNameForm = event.target.name.value;
    imageURLForm = event.target.image.value;
    departmentForm = event.target.department.value;
    levelForm = event.target.level.value;
    imageURLForm = event.target.image.value;
    let newEmployee = new Employee(fullNameForm, departmentForm, levelForm, imageURLForm);
    divID.innerHTML = "";
    saveEmployee();
    form.reset();
}

if (localStorage.getItem("employee") == null) {
    let ghazi = new Employee("Ghazi Samer", "Administration", "Senior", "./Photos/1.jpg");
    let lana = new Employee("Lana Ali", "Finance", "Senior", "./Photos/3.jpg");
    let tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", "./Photos/5.jpg");
    let safi = new Employee("Safi Walid", "Administration", "Mid-Senior", "./Photos/4.jpg");
    let omar = new Employee("Omar Zaid", "Development", "Senior", "./Photos/6.jpg");
    let rana = new Employee("Rana Saleh", "Development", "Junior", "./Photos/5.jpg");
    let hadi = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./Photos/6.jpg");
    saveEmployee();

} else {

    let employee = localStorage.getItem("employee");
    let parseEmployee = JSON.parse(employee);
    for (let i = 0; i < parseEmployee.length; i++) {
        let newEmployee = new Employee(parseEmployee[i].fullName, parseEmployee[i].department, parseEmployee[i].level, parseEmployee[i].imageURL);

    }
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].showData();

    }

}

function saveEmployee() {
    let formatedData = JSON.stringify(allEmployee);
    localStorage.setItem("employee", formatedData);
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].showData();

    }
}


'use strict';

let allEmployees = [];
let form = document.getElementById("dataForm");
let employeeArea = document.getElementById("employeeArea");
let table = document.getElementById("table");

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

function saveData() {
    let formatted = JSON.stringify(allEmployees);
    localStorage.setItem("Employees", formatted);
};

function getData() {
    let employee = localStorage.getItem("Employees");
    let personData = JSON.parse(employee);

    if (personData != null) {
        allEmployees = [];
        for (let i = 0; i < personData.length; i++) {
            new Employees(0, personData[i].fullName, personData[i].department, personData[i].level, personData[i].image, 0);
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

    let newEmployee = new Employees(0, fullName, department, level, image, 0);
    newEmployee.randID();
    newEmployee.randSalary();
    renderAll();
    saveData();
    form.reset();
};
function renderAll() {
    employeeArea.innerHTML = "";
    for (let i = 0; i < allEmployees.length; i++) {

        allEmployees[i].render();
    }
};


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

Employees.prototype.countOfEmployees = function () {
    let count = 0;
    let department = [];
    switch (department) {
        case "Administration ":
            return count++;

        case "Marketing":
            return count++;

        case "Development":
            return count++;

        case "Finance ":
            return count++;
    }
};

Employees.prototype.renderTableBody = function () {
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

renderAll();
getData();
renderHeader();
renderBody();
countOfEmployees();
renderAll();


