var products=":Bread Pie Pizza IceCream Fruits Vegetables";
//show pop up for the product selection and what the user need
var whatToDo= prompt("Type '1' to check if a prodcut is available\nType '2' to list all products\nType anything to quit");
// listing the products if the user clicks 1 or not 2 if it is not available
if(whatToDo === '2'){
    document.write("<p class=info> The products available" + products + "</p>")
   }else if(whatToDo === "1"){
       // different products availablity and search in the list
       var product = prompt(" Enter the name of the product for availability");
       if(product.indexOf(product) === -1){
           
           document.write("<p class=error>Sorry, the product is not available </p>")
       }else{
           document.write("<p class= success>The product is available</p>" )
       }
   }else{
       document.write("<p class=info>Refresh the page to get the product list or select the product</p>")
   }
