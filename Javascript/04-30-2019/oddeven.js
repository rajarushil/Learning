// eneter the number pop up
var number= parseInt(prompt("Enter the number(n) to get the odd and even list"));
//check if it is a number

if(!isNaN(number)){
    // calculate the odd numbers // calculate the even numbers
    var evenContainer= "<div class=even><h2>EVEN</h2><ul>"
       var oddContainer= "<div class=odd><h2>ODD</h2><ul>"
    var odd=""
    var even=""
    for(var i = 0; i <= number; i++){
      if(i % 2==0){
          even = "<li>" + i + "is even </li>";
          evenContainer +=even;
      }else{
          odd = "<li>"+i + "is odd </li>";
          oddContainer+=odd;
      }
    }
    evenContainer += "</ul></div>"
    oddContainer += "</ul></div>"
    
    document.write(evenContainer);
    document.write(oddContainer);
}

// display the result
