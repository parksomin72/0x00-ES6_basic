export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next: function () {
      if (currentDeptIndex >= departments.length) {
        return { done: true };
      }

      const department = departments[currentDeptIndex];
      const employees = allEmployees[department];

      if (currentEmployeeIndex >= employees.length) {
        currentDeptIndex++;
        currentEmployeeIndex = 0;
        return this.next(); // Call next recursively for the next department
      }

      const employee = employees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: employee, done: false };
    },
  };

  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
