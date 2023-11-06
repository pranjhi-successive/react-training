import React, { useState, useMemo } from "react";
const StudentList = () => {
  const initialNmaes = ["Riya", "Tushar", "Anmol", "Anushka"];
  const [studentNames, setStudentNames] = useState(initialNmaes);
  const memoizedNames = useMemo(() => studentNames, [studentNames]);
  const addStudent = () => {
    const newName = prompt("Please Enter your name");
    if (newName) {
      setStudentNames([...studentNames, newName]);
    }
  };
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {memoizedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={addStudent}>ADD STUDENT</button>
    </div>
  );
};
export default StudentList;
