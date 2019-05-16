function enterName(){
    //enter the first name 
    var firstName=document.getElementById("firstName").value;
    // enter the last name
    var lastName=document.getElementById("lastName").value;
    //combining the values from the above
    var str = firstName + lastName;
    //replacing the value with x from r 
    //var res = str.replace(/r/g, "x");
  for(var i=0; i < str.length;i++){
        
   var char = str.charAt(i);
      if(str.charAt(i)=='r'){
          str=str.replace(char,'x' );
      }
    
}
alert (str);
}
    //showing result as alert



