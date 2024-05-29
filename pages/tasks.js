import { useState } from 'react';

const TaskManager = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [response, setResponse] = useState('');

  const handleAddTask = async () => {
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: `Add this task: ${task}` }),
    });

    const data = await res.json();
    setResponse(data.response);
    setTasks([...tasks, { task, response: data.response }]);
    setTask('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
      >
        Add Task
      </button>
      <ul className="mt-4 space-y-2">
        {tasks.map((t, index) => (
          <li key={index} className="border p-2 rounded">
            <div>{t.task}</div>
            <div className="text-sm text-gray-500">{t.response}</div>
          </li>
        ))}
      </ul>
      {response && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
