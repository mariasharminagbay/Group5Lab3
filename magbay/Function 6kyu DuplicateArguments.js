function solution(){
 // return true if this method is called with duplicate argument values 
   var i;
   var values = []; //create an array to push values from arguments
   
   for(i=0; i < arguments.length;i++)
   {
     var value = arguments[i];
     if (values.indexOf(value) !== -1)
       {
         return true;
       }
     values.push(value); // add values to array
   } //end for for loop
   return false
}
