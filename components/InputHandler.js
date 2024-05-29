import { useState } from 'react';
import TaskComponent from './TaskComponent';
import AppointmentComponent from './AppointmentComponent';
import RecommendationComponent from './RecommendationComponent';

const InputHandler = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [response, setResponse] = useState('');

  const handleInput = async () => {
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setResponse(data.response);

    if (/reminder|todo|task/i.test(input)) {
      setTasks([...tasks, { task: input, response: data.response }]);
    } else if (/appointment|schedule|meeting/i.test(input)) {
      setAppointments([
        ...appointments,
        { appointment: input, response: data.response },
      ]);
    } else if (/recommendation|suggest/i.test(input)) {
      setRecommendations([
        ...recommendations,
        { input, response: data.response },
      ]);
    }

    setInput('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">AI-Powered Personal Assistant</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your request"
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleInput}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
      {response && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>{response}</p>
        </div>
      )}
      <div className="mt-8">
        <TaskComponent tasks={tasks} />
        <AppointmentComponent appointments={appointments} />
        <RecommendationComponent recommendations={recommendations} />
      </div>
    </div>
  );
};

export default InputHandler;
