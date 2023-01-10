import ButtonBox from "./ButtonBox";
import ResultDisplayScreen from "./ResultDisplayScreen";
import { useState } from "react";

function CalWrapper() {
  const [displayString, setDisplayString] = useState("");

  //Taken separate variable to display "X" instead of * in expression
  const [result, setResult] = useState("");

  const [expression, setExpression] = useState("");

  return (
    <div className="flex flex-col rounded-lg">
      <ResultDisplayScreen
        displayString={displayString}
        displayResult={result}
      />
      <ButtonBox
        result={result}
        setDisplayString={setDisplayString}
        setResult={setResult}
        expression={expression}
        setExpression={setExpression}
      />
    </div>
  );
}

export default CalWrapper;
