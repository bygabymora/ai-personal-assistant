const RecommendationComponent = ({ recommendations }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recommendations</h2>
      <ul className="mt-4 space-y-2">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="border p-2 rounded">
            <div>{recommendation.input}</div>
            <div className="text-sm text-gray-500">
              {recommendation.response}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationComponent;
