import React, { useCallback, useState } from "react";
const Task = ({ tasks }) => {
  const [completed, setCompleted] = useState([]);
  const handleCompleteTask = useCallback(
    (taskId) => {
      if (!completed.includes(taskId)) {
        setCompleted((prevcompleted) => [...prevcompleted, taskId]);
      }
    },
    [completed]
  );
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            {!completed.includes(task.id) && (
              <button onClick={() => handleCompleteTask(task.id)}>
                COMPLETE
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Task;
