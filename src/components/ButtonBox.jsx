import CalculatorButton from "./CalculatorButton";
function ButtonBox({expression, setExpression, setResult}) {
    const btnValues = 
                [7, 8, 9, "-",
                 4, 5, 6, "+",
                 1, 2, 3, "x",
                 "C",0, "/", "=" ];
                 const buttons = btnValues.map((btn) =>(
                   <div className = "text-center" key={btn}>
                      <CalculatorButton displayChar={btn} 
                      value={btn} 
                      onClick={()=>{   
                        const btnClicked= `${btn}`;                   
                        console.log(`${btn} Clicked!`); 
                        if(btnClicked == "=") 
                        {
                          calculateResult();
                        } else if(btnClicked == "C")
                        {
                          resetExpression();
                        }
                        else{
                        setExpression(prevExpression => prevExpression + btnClicked)   
                        console.log(expression);                    
                        }}}/>
                   </div>));
               
   function resetExpression()
   {
    setExpression("");
   }

   function calculateResult()
   {
    console.log("Inside Calculate" +expression);
    setResult(eval(expression).toString());
   }
  return (
    <div>
      <div class="h-64 grid grid-cols-4 grid-flow-row gap-4 bg-gray-700 p-4 content-center">
       {buttons}   
      </div>
    </div>
  );
}

export default ButtonBox;
