//generate numbers
var res= "";
for(var i=0;i<1000;i++){
    var randomNum=
        Math.ceil(Math.random() * 9);
    // store the numbers generated
    res += randomNum;
}
//insert the result
document.write("<p>" + res + "</p>")
