/*
    Write a javascript function that accepts an array, a value and a callback, 
    then calls that callback for each element in the array > value
*/

function callIf(arr, value, callback){
    arr.forEach(function(e){
        if(e > value){
            callback(e);
        }
    })
}

//callIf([5,6,2,8,9], 7, function(element){
//    console.log("From the callback " +element)
//})




/* 
    Create a function that generates n random numbers, and stores the sum of these numbers, and also the numbers in an array
    if you provide to the function a callback it will call it with arr and sum arguments
    For ex:
    getItem(function(arr, sum){
    }, ceil, numItems).
    ceil and numItems will have by default a value of 10

*/
function genItems(callback, ceil, numItems){
    var arr =[];
    var sum = 0;
    if(!ceil){
        ceil = 10;
    }
    if(!numItems){
        numItems = 10; 
    }
    
    for(var i = 0; i < numItems; i++){
        var randNum = Math.ceil(Math.random() * ceil);
        arr.push(randNum);
        sum += randNum;
    }
    callback(arr, sum);
    
    
}
//genItems(function(arr, sum){
//    console.log(sum)
//}, 2, 5)







