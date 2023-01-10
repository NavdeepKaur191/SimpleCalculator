function ResultDisplayScreen({ displayString, displayResult }) {
  return (
    <div className="h-20 bg-gray-600 text-right p-4">
      <p className="text-sm text-white ">{displayString}</p>
      <h1 className="text-lg text-white ">{displayResult}</h1>
    </div>
  );
}

export default ResultDisplayScreen;
