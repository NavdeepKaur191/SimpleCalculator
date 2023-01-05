import ButtonBox from "./ButtonBox";
import ResultDisplayScreen from "./ResultDisplayScreen";
import { useState } from "react";

function CalWrapper() {
    const [expression,setExpression]=useState("");
    const [result, setResult] = useState('');

    return (
        <div className ="flex flex-col rounded-lg">
        <ResultDisplayScreen displayString={result.length==0?expression: result}/>
        <ButtonBox  expression={expression} setExpression={setExpression} setResult={setResult}/>
      </div>
    );
  }
  
  export default CalWrapper;
  