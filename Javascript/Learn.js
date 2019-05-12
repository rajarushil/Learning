<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>
<label> first Name </label>
<input type="text" id="firstName"></br>
<label> Last Name </label>
<input type="text" id="lastName"></br>
<label> SSN </label>
<input type="number" id="SSN">
<input type="button" value="submit" onClick="mergeValue()"/>
<input type="button" value="Add" onClick="sumofTwoNumbers()"/>

<script>
//firtstName+lastname+ssn
function mergeValue()
{
var firstName=document.getElementById("firstName").value;
var lastName=document.getElementById("lastName").value;
var ssn=document.getElementById("SSN").value;
var result=firstName+lastName+ssn;
//database save
alert(result);
}
function sumofTwoNumbers()
{
var firstName=parseInt(document.getElementById("firstName").value);
var lastName=parseInt(document.getElementById("lastName").value);
alert(firstName+lastName);

}
</script>

</body>
</html>

/// rushil
// design firm
..add a text box
..enter rushil
...replace r with x
xushil 

////design foirm
...add a text box
..enter any number
..check if number divisble /2
 alert(then displya the niumber is dvisble by 2)
else 
alert(its not divisble /2)

