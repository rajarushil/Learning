//1-Ask for the number
var number = parseInt(prompt("Enter the number to get the multiplication table"));
//2- Check if it is a number
    if(!isNaN(number)){
       //2-1 yes, we will generate the multiplication table than insert it 
        var ul = "<ul>"
        for(var i = 1; i <= 10; i++){
            var res = number + " * " + i + " = " + (number * i);
            ul += "<li>" + res + "</li>" 
        }
        ul += "</ul>";
        document.write(ul);
    }else{
        //2-2 no, we will alert you should enter a number
        alert("You should enter a number");
    }
    

    