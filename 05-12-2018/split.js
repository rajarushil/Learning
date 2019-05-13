function enterName(){
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var str =firstName + lastName;
    var res = str.replace(/r/g, "x");
    alert (res);
}


