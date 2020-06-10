function calculateString(st){
var leftValue='',rightValue='';
var isSecondValue = false
var totalValue, operand,intleftValue,intrightValue;
  
  for (i = 0; i < st.length; i++) 
      {
      var strNow;
      strNow = (st[i]);
        if (!isNaN(strNow) || strNow.includes("."))
          {
            if (isSecondValue == false )
            {
              leftValue = leftValue + strNow;
            }
            else
            {
              rightValue = rightValue + strNow;
            }
          }
        else if (strNow.includes("/") || strNow.includes("-") || strNow.includes("*") || strNow.includes("+"))
          {
            isSecondValue = true;
            operand = strNow;
          }
       
      }//end of for loop
            
      intleftValue = parseFloat(leftValue);
      intrightValue = parseFloat(rightValue);
      
      if (operand == "+")
        {
          totalValue = intleftValue + intrightValue;
          return parseInt(totalValue = Math.round((totalValue*10)/10,2.8).toFixed(2)).toString();
        }
      
      else if(operand == "-")
        {
          totalValue = intleftValue - intrightValue;
          return parseInt(totalValue = Math.round((totalValue*10)/10,2.8).toFixed(2)).toString();
        }
      else if(operand == "/")
        {
          totalValue = intleftValue / intrightValue;
          return parseInt(totalValue = Math.round((totalValue*10)/10,2.8).toFixed(2)).toString();
        }
       else if(operand == "*")
        {
          totalValue = intleftValue * intrightValue;
          return parseInt(totalValue = Math.round((totalValue*10)/10,2.8).toFixed(2)).toString();
        }
}
