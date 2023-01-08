function CalculatorButton({
  displayChar,
  value,
  onClick  
}) {
  const btnValue = value;
  return (
    <button
      className={
        btnValue.toString().startsWith("C")
          ? "bg-white hover:bg-gray-100 text-black font-bold rounded-full h-10 w-20 flex items-center justify-center"
          : "bg-white hover:bg-gray-100 text-black font-bold rounded-full h-10 w-10 flex items-center justify-center"
      }
      value={value}
      onClick={onClick}
    >
      {displayChar}
    </button>
  );
}

export default CalculatorButton;
