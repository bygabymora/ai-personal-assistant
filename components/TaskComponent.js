const TaskComponent = ({ tasks }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Tasks</h2>
      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="border p-2 rounded">
            <div>{task.task}</div>
            <div className="text-sm text-gray-500">{task.response}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
