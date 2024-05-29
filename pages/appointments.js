import { useState } from 'react';

const AppointmentScheduler = () => {
  const [appointment, setAppointment] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [response, setResponse] = useState('');

  const handleScheduleAppointment = async () => {
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Schedule an appointment: ${appointment}`,
      }),
    });

    const data = await res.json();
    setResponse(data.response);
    setAppointments([
      ...appointments,
      { appointment, response: data.response },
    ]);
    setAppointment('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Appointment Scheduler</h1>
      <div className="mb-4">
        <input
          type="text"
          value={appointment}
          onChange={(e) => setAppointment(e.target.value)}
          placeholder="Enter an appointment"
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleScheduleAppointment}
        className="bg-green-500 text-white py-2 px-4 rounded mr-2"
      >
        Schedule Appointment
      </button>
      <ul className="mt-4 space-y-2">
        {appointments.map((a, index) => (
          <li key={index} className="border p-2 rounded">
            <div>{a.appointment}</div>
            <div className="text-sm text-gray-500">{a.response}</div>
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

export default AppointmentScheduler;
