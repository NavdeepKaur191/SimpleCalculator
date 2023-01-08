import CalculatorButton from "./CalculatorButton";
import { useState } from "react";

function ButtonBox({ expression, setExpression,result, setResult}) {
  const btnValues = [
    7,
    8,
    9,
    "-",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "x",
    ".",
    0,
    "/",
    "=",
    "CE",
    "C"
  ]; 
  const [calExpression,setCalExpression]=useState("");  
  const buttons = btnValues.map((btn) => (
    <div className={btn.toString().startsWith("C") ? "content-center col-span-2 px-4" :"text-center"} key={btn}>
      <CalculatorButton
        displayChar={btn}
        value={btn}
        onClick={() => {
          const btnClicked = `${btn}`;
          console.log(`${btn} Clicked!`);
          if (btnClicked == "=") {
            calculateResult();  
            setExpression("");
            setCalExpression("");                     
          } else if (btnClicked === "C") {
            resetExpression();
          }
          else if (btnClicked === "CE") {   
          {             
               setExpression((prevExp)=>prevExp.slice(0,-1));
               setCalExpression((prevExp)=>prevExp.slice(0,-1));             
          }     
        }
        else if (btnClicked === "x") { 
          setExpression((prevExpression) => prevExpression + btnClicked)       
          setCalExpression((calExp) => calExp + "*");
        }
         else {
            setExpression((prevExpression) => prevExpression + btnClicked);
            setCalExpression((calExp) => calExp + btnClicked) ;   
            setResult("");
            console.log(" New expression "+expression);
            console.log("New calExpression" +calExpression);
          }
        }
      }
      />
    </div>
  ));

  function resetExpression() {
    console.log("Inside resetExpression" + expression);
    setResult("");
    setExpression("");
    setCalExpression("");
  }

  function calculateResult() {
    console.log("Inside Calculate" + expression);
    const tempResult=eval(calExpression);
    setResult(tempResult.toString());   
    //setCalExpression(tempResult.toString()); 
    // console.log("In Calculate expression="+expression);
    // console.log("In Calculate result "+result);    
    // console.log("In Calculate   calExp" +calExpression);   
  }
  return (
    <div>
      <div className=" flex h-80 grid grid-cols-4 grid-flow-row gap-4 bg-gray-700 p-8 pt-2 pb-2 content-center">
        {buttons}
      </div>
    </div>
  );
}

export default ButtonBox;
