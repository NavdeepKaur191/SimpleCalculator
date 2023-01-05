function CalculatorButton({ displayChar,value,onClick }) {
  return (
    <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-full"
    value={value}
    onClick={onClick}>
    {displayChar}
    </button>
  );
}

export default CalculatorButton;
