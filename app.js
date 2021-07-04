// 1. Write a function that displays current date & time in your
// browser.
// function time(rightnow) {
//      rightnow = new Date();
//      return rightnow
// }  
// alert(time());

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");

// function greeting(f, l) {
//     var fullName = f + l;
//     return "good morning : " + fullName;
// }

// alert(greeting(firstName, lastName));

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// var num1 = +prompt("enter first value");
// var num2 = +prompt("enter second value");
// function add(f,s) {
//     var addition = f+s;
//     return addition;

// }
// alert(add(num1,num2));

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var number1 = +prompt("enter first value");
// var operation = prompt("enter operation you want to perform");
// var number2 = +prompt("enter second value");
// function calculator(one,two) {
//     var perform;
//     if(operation == "+"){
//         perform = one +two;
//     }
//     else if(operation == "-"){
//          perform = one - two;
//     }
//     else if(operation == "/"){
//         perform = one/two;
//     }
//     else if(operation == "%"){
//         perform = one%two;
//     }
//     else if(operation == "*"){
//         perform = one * two;
//     }
//     return perform;
// }
// alert(calculator(number1,number2));


// 5. Write a function that squares its argument.

// 
// var digit = +prompt("enter any digit")
// function square(value) {
// var perform = value*value;
// return perform;
// }
// 

// alert(square(digit));



// 6. Write a function that computes factorial of a number.

// var value = +prompt("enter a number");
// function factorial(num) {
//     var factorialOfNo = 1;
//     for (var i = num; i >= 1; i--) {
//         factorialOfNo *= i;
//     }
//     return factorialOfNo;
// }
// alert(factorial(value));

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var start = +prompt("enter first number");
// var end = +prompt("enter last no. ");

// function counting(start, end) {
//     var arr = [];
//     for (let i = start; i <= end; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

// if (start > end) {
//     alert('enter valid values');
// } else {
//     alert(counting(start, end))
// }

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2

// var a = +prompt("enter the value of perpendicular");
// var b = +prompt("enter the value of base");
// function calcHypo(a,b) {
//     return Math.sqrt((a*a)+(b*b));
// }
// alert(calcHypo(a,b));

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// var height = +prompt("enter the height of a rectangle");
// function areaOfRectangle(width,height) {
//     return width*height;
// }
// alert(areaOfRectangle(4,height));


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// program to check if the string is palindrome or not



// var input = prompt('Enter a string: ');
// function palindrom(string) {
//     return string === string.split("").reverse().join("");
// }
// if(palindrom(input) == true){
//     alert("it is a palindrom")
// }else{
//     alert("not a palindrome")
// }


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// var phrase = "prograaming meri smajah se bahir hy bhiduu !!!";
// function uppercase(string) {
//     var strArr = string.split(" ");
//     for (var i = 0; i < strArr.length; i++) {
//       strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
//     }
//     return strArr.join(" ");
// }
// alert(uppercase(phrase));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// var phrase = "web development tutorial";
// function longestWord(string) {
//     var arr = phrase.split(" ");
//     var word;
//     var longestWord = 0
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i].length  >longestWord){
//          longestWord = arr[i].length
//          word = arr[i]
//        }
//         // 
//     }
//     return word;
// }
// alert(longestWord(phrase));


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
//  function check(string, letter) {
//      var count = 0
//      for (let i = 0; i < string.length; i++) {
//         if (string[i] == letter) {
//             count++
//         }
         
//      }
//      return "no of os in string is : " +count
//  }
//  alert(check("fdfoosdsdoossoo" , "o"));


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle πr 2

// function calcCircumference(radius) {
//     return "the circumference of circle is :" + (radius *2 *3.14)
// }

// alert(calcCircumference(4))

// function Area(radius) {
//     return "the area of circle is :" + (3.14 *radius*radius)
// }

// alert(Area(4))