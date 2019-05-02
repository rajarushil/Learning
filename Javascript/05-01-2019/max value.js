var arr = [];
//1- We ask the user to enter a number, and we stop when he types in exit
do{
  var input = prompt("Add an item to the array(it must be a number)\nType exit to stop");
    if(input.toLocaleLowerCase() === "exit"){
        break;
    }
    
    input = parseInt(input);
    if(!isNaN(input)){
       // add the value array
        arr.push(input);
    }
    

    

}while(true);
    if(arr.length === 0){
        //if array is empty
        document.write("<p>Your array is empty</p>")
    }else{
          //calculate the max value of the array
        var res = arr.reduce(function(acc, e){
            
            
            
if(e > acc){
                return e;
 }else{
                return acc;
            }
        },arr[0])
        //4- We insert the result
        document.write("<p>The max value in the array is: <strong> " + res + "</strong></p>")
    }
    

    






  

// result