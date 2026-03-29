 console.log("I am connected!!!")
// // Create a single employee record
// function createEmployeeRecord(arr) {
//   return {
//     firstName: arr[0],
//     familyName: arr[1],
//     title: arr[2],
//     payPerHour: arr[3],
//     timeInEvents: [],
//     timeOutEvents: []
//   };
// }

// // Create multiple employee records
// function createEmployeeRecords(arrays) {
//   return arrays.map(arr => createEmployeeRecord(arr));
// }

// // Add a time-in event
// function createTimeInEvent(employee, timestamp) {
//   const [date, hour] = timestamp.split(" ");

//   employee.timeInEvents.push({
//     type: "TimeIn",
//     hour: parseInt(hour),
//     date: date
//   });

//   return employee;
// }

// // Add a time-out event
// function createTimeOutEvent(employee, timestamp) {
//   const [date, hour] = timestamp.split(" ");

//   employee.timeOutEvents.push({
//     type: "TimeOut",
//     hour: parseInt(hour),
//     date: date
//   });

//   return employee;
// }

// // Calculate hours worked on a specific date
// function hoursWorkedOnDate(employee, date) {
//   const timeIn = employee.timeInEvents.find(e => e.date === date);
//   const timeOut = employee.timeOutEvents.find(e => e.date === date);

//   return (timeOut.hour - timeIn.hour) / 100;
// }

// // Calculate wages earned on a specific date
// function wagesEarnedOnDate(employee, date) {
//   const hours = hoursWorkedOnDate(employee, date);
//   return hours * employee.payPerHour;
// }

// // Calculate total wages for an employee
// function allWagesFor(employee) {
//   const dates = employee.timeInEvents.map(e => e.date);

//   return dates.reduce((total, date) => {
//     return total + wagesEarnedOnDate(employee, date);
//   }, 0);
// }

// // Calculate total payroll for all employees
// function calculatePayroll(employees) {
//   return employees.reduce((total, emp) => {
//     return total + allWagesFor(emp);
//   }, 0);
// }


console.log("I am connected!!!");

// Create a single employee record
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

// Create multiple employee records
function createEmployeeRecords(arrays) {
  return arrays.map(arr => createEmployeeRecord(arr));
}

// Add a time-in event
function createTimeInEvent(employee, timestamp) {
  const [date, hour] = timestamp.split(" ");

  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  });

  return employee;
}

// Add a time-out event
function createTimeOutEvent(employee, timestamp) {
  const [date, hour] = timestamp.split(" ");

  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  });

  return employee;
}

// Calculate hours worked on a specific date
function hoursWorkedOnDate(employee, date) {
  const timeIn = employee.timeInEvents.find(e => e.date === date);
  const timeOut = employee.timeOutEvents.find(e => e.date === date);

  if (!timeIn || !timeOut) return 0; // safety check

  return (timeOut.hour - timeIn.hour) / 100;
}

// Calculate wages earned on a specific date
function wagesEarnedOnDate(employee, date) {
  const hours = hoursWorkedOnDate(employee, date);
  return hours * employee.payPerHour;
}

// Calculate total wages for an employee
function allWagesFor(employee) {
  const dates = [...new Set(employee.timeInEvents.map(e => e.date))];

  return dates.reduce((total, date) => {
    return total + wagesEarnedOnDate(employee, date);
  }, 0);
}

// Calculate total payroll for all employees
function calculatePayroll(employees) {
  return employees.reduce((total, emp) => {
    return total + allWagesFor(emp);
  }, 0);
}