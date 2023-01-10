import CalculatorButton from "./CalculatorButton";
function ButtonBox({ expression, setExpression, result, setResult,setDisplayString}) {
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
            //setExpression("");
            //setCalExpression("");                     
          } else if (btnClicked === "C") {
            resetExpression();
          }
          else if (btnClicked === "CE") {   
          {      
               if(result.length>0)
               {
                setResult("");
               }  
               else
               {  
               setExpression((prevExp)=>prevExp.slice(0,-1));
               setDisplayString((prevExp)=>prevExp.slice(0,-1));
               }             
          }     
        }
        else if (btnClicked === "x") { 
          setDisplayString((prevExpression) => prevExpression + btnClicked)       
          setExpression((calExp) => calExp + "*");
        }
         else {
          if(result.length>0)
          {
            setDisplayString(result+btnClicked);
            setExpression(result+btnClicked);
            setResult("");
          }
          else{
            setExpression((prevExpression) => prevExpression + btnClicked);
            setDisplayString((calExp) => calExp + btnClicked) ;   
            setResult("");
          }
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
    setDisplayString("");
  }

  function calculateResult() {
    console.log("Inside Calculate" + expression);
    let tempResult="";
    try {
      tempResult=eval(expression);
    } catch (error) {
      tempResult="ERROR";
    }    
    setResult(tempResult.toString());       
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
