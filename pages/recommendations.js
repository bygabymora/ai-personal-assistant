import { useState } from 'react';

const Recommendations = () => {
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [response, setResponse] = useState('');

  const handleGetRecommendations = async () => {
    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Give me recommendations based on: ${input}`,
      }),
    });

    const data = await res.json();
    setResponse(data.response);
    setRecommendations([
      ...recommendations,
      { input, response: data.response },
    ]);
    setInput('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Personalized Recommendations</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter criteria for recommendations"
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleGetRecommendations}
        className="bg-purple-500 text-white py-2 px-4 rounded mr-2"
      >
        Get Recommendations
      </button>
      <ul className="mt-4 space-y-2">
        {recommendations.map((r, index) => (
          <li key={index} className="border p-2 rounded">
            <div>{r.input}</div>
            <div className="text-sm text-gray-500">{r.response}</div>
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

export default Recommendations;
