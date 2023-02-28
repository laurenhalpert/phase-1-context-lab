/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    let employee = {};
    employee.firstName = array[0];
    employee.familyName = array[1];
    employee.title = array[2];
    employee.payPerHour = array[3];
    employee.timeInEvents = [];
    employee.timeOutEvents= [];
    //my this here is the employee record object
    return employee;
}

function createEmployeeRecords(arrayOfArrays) {
    let allEmployees =[];
    arrayOfArrays.forEach(elem => allEmployees.push(createEmployeeRecord(elem)));
    //this is undefined here
    //returns array of objects
    return allEmployees;
}

function createTimeInEvent (date) {
    let timeIn = {};
    timeIn.type = "TimeIn",
    timeIn.date = date.substring(0,10),
    timeIn.hour = parseInt(date.substring(11)),
    //this is employee record object
    //returns updated record
    this.timeInEvents.push(timeIn);
    return this;
}

function createTimeOutEvent (date) {
    let timeOut = {};
    timeOut.type = "TimeOut",
    timeOut.date = date.substring(0,10);
    timeOut.hour = parseInt(date.substring(11)),
    //this is employee record object
    //returns updated record
    this.timeOutEvents.push(timeOut);
    return this;
}

function hoursWorkedOnDate (date) {
    //this is an employee record object with updated timeInEvents and timeOutEvents
    let matchingTimeInEvent = this.timeInEvents.filter((elem)=> elem.date === date);
    let matchingTimeOutEvent = this.timeOutEvents.filter((elem) => elem.date === date);
    
    let outHours = matchingTimeOutEvent.map(elem => elem.hour);
    let inHours = matchingTimeInEvent.map(elem => elem.hour);
    
    for (let i = 0; i< outHours.length; i++){
        return (outHours[i] - inHours[i])/100;
    }   
}

function wagesEarnedOnDate(date) {
    //this is an employee record object with updated timeInEvents and timeOutEvents
    let hours = hoursWorkedOnDate.call(this, date);
    return this.payPerHour * hours;
}

function findEmployeeByFirstName(employeeRecords, name) {
    //this is undefined here
    return (employeeRecords.filter(elem => elem.firstName===name)[0]);
}

function calculatePayroll(employeeRecords) {
    //this is undefined here
    let mapOfWagesForEmployee = employeeRecords.map(elem => allWagesFor.call(elem))
    return mapOfWagesForEmployee.reduce(((total, num)=>total+num), 0);
}