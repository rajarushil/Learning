// javascript that accepts array and check if item is present in array or not

function inArray(arr, item){
    return !(arr.indexOf(item)=== -1);
}
console.log(inArray([1,2,3], 4))


// javascript which accpets n arrays and returns all the arrays concatenated or mixed.
function combineArrays(){
    var res = [];
    for(var i=0; i<arguments.length; i++)
    {
        arguments [i].forEach(function(e){
            if(res.indexOf(e) === -1)
                    res.push(e);
        })

    };
return res;
}


console.log(combineArrays([1,2,3], [4,5,6], [5,6,3,8,9]))


//js funtion for arrays to return to the smallest value

function smallVal(){
    var res = 999999;
    for(var i =  0; i < arguments.length; i++)
    {
       for(var j = 0; j < arguments[i].length; j++){
           if(arguments[i][j]< res){
               res=arguments[i][j]
               
           }
               
       }
    }
    return res;
}

console.log(smallVal([5,6,8,3,9,3,4],[5,6,9,7]));
