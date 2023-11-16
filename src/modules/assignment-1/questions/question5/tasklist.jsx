const TaskList = ({ tasks }) => {
  return (
    <div>
      <h3>TASK LIST </h3>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
