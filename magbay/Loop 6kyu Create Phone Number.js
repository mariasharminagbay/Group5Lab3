function createPhoneNumber(numbers){
 var createPhone;
  
  for(var i=0; i<numbers.length;i++)
    { var value = numbers[i];
      if(i === 0)
        { createPhone = '(' + value; }
       else if (i === 2)
         { createPhone = createPhone + value + ') '; }
        else if (i === 5)
          {  createPhone = createPhone + value + '-'; }
       else
       {  createPhone = createPhone + value; }
    }
    return createPhone;
}
