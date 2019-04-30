var wantToPlay = prompt("Would you like to get the biggest number of 3 numbers? y(yes) or n(no)")

wantToPlay = wantToPlay.toLocaleLowerCase();

if(wantToPlay === "n" || wantToPlay === "no"){
    alert("Please refresh the page if you want to play again");
} else if(wantToPlay === "y" || wantToPlay === "yes"){
    var num1 = prompt("Enter the first number");
    var num2 = prompt("Enter the second number");
    var num3 =  prompt("Enter the third number");
  var res = num1;
    if(res < num2){
        res = num2; 
    }
    if(res<num3){
        res=num3;
    }
  alert("The biggest number is " + res);
}