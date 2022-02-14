// 'use strict';

let allEmployees = [];
function Employees(employeeID, fullName, department, level, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = `${this.fullName}.jpg`;
    this.salary = salary;
    allEmployees.push(this);

};
Employees.prototype.render = function () {
    document.write(`<h3>${this.fullName}: ${this.salary}</h3>`);
};
function getRandomArbitrary(min, max) {
    if (min < max)
        return Math.ceil(Math.random() * (max - min) + min) / 7.5;
    else
        return "wrong entry";
};
function display() {
    let ghazi = new Employees("1000", "Ghazi Samer", "Administration ", "Senior", getRandomArbitrary(1500, 2000));
    let lana = new Employees("1001", "Lana Ali", "Finance ", "Senior", getRandomArbitrary(1500, 2000));
    let tamara = new Employees("1002", "Tamara Ayoub", "Marketing", "Senior", getRandomArbitrary(1500, 2000));
    let saif = new Employees("1003", "Safi Walid", "Administration", "Mid-Senior", getRandomArbitrary(1000, 1500));
    let omar = new Employees("1004", "Omar Zaid	", "Development", "Senior", getRandomArbitrary(1500, 2000));
    let rana = new Employees("1005", "Rana Saleh", "Development ", "Junior", getRandomArbitrary(500, 1000));
    let hadi = new Employees("1006", "Hadi Ahmad", "Finance ", "Mid-Senior", getRandomArbitrary(1000, 1500));


    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].render();
    }
};
document.write(display());
