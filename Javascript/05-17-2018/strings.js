
   // Checks if a string is longer than n value, remove all whitespace

function isLonger(str, n) {
    var res = str.trim();
    return res.length > n;
}

 //   Create a function that reverses a string, for example: Hi, iH
//    Hello, olleH

function reverseStr(str) {
    return str.split("").reverse().join("");
}
//console.log(reverseStr("Hi"))


/*
    Write a JavaScript function to capitalize the first letter of each word in a string
*/
function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalize(str) {
    return str.split(" ").map(function (e) {
        return capitalizeWord(e);
    }).join(" ");
}


/*
    Write a javascript function that accepts a strings and n(integer), and returns only the words that have length > n
    default value for n = 5;
*/
function onlyLongStr(str, n) {
    if (n === undefined) {
        n = 5;
    }
    return str.split(" ").filter(function (e) {
        return e.length > n;
    }).join(" ");

}




/*  
    Filter the big words
    You have an array of big words to check if a word is a big word
*/
function filterStr(str) {
    var bigWords = [
        "bigword1",
        "bigword2",
        "bigword3",
        "freaking"
    ]
    return str.split(" ").map(function (e) {
        if (bigWords.indexOf(e) !== -1) {
            return "*****"
        } else {
            return e;
        }
    }).join(" ");
}



/* 
    Create a function to limit the length of a string 
 */
function limitStr(str, n){
    return str.slice(0, n) + "...";
}
console.log(limitStr("Hichem MED", 8))






