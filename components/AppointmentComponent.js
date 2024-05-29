const AppointmentComponent = ({ appointments }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Appointments</h2>
      <ul className="mt-4 space-y-2">
        {appointments.map((appointment, index) => (
          <li key={index} className="border p-2 rounded">
            <div>{appointment.appointment}</div>
            <div className="text-sm text-gray-500">{appointment.response}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentComponent;
