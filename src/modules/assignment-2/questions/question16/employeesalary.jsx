import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: "TUSHAR", salary: 70000 },
    { name: "ANUSHKA", salary: 60000 },
    { name: "ANMOL", salary: 50000 },
  ]);

  const averageSalary = useMemo(() => {
    const totalSalary = employees.reduce(
      (acc, employee) => acc + employee.salary,
      0
    );
    return totalSalary / employees.length;
  }, [employees]);

  const updateSalaries = () => {
    const newSalaries = employees.map((employee) => ({
      ...employee,
      salary: employee.salary + 1000,
    }));
    setEmployees(newSalaries);
  };

  return (
    <div>
      <h2>Average Salary of Employees</h2>
      <p>Employee List:</p>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name}: {employee.salary}
          </li>
        ))}
      </ul>
      <p>Average Salary: {averageSalary}</p>
      <button onClick={updateSalaries}>Updated Salary</button>
    </div>
  );
};

export default EmployeeSalary;
