console.log("this is console screen");

var firstName = "kasinath ";
var secondName = "TALLURY";
console.log(firstName);
console.log(secondName);
var fullName = firstName.concat(secondName);
console.log(firstName + secondName);
console.log(fullName);

var length = fullName.length;
console.log(length);

var sentence = "I am a boy";
replaceSentence = sentence.replace("I", "Rohan");
console.log(sentence);
console.log(replaceSentence);

var capitalName = firstName.toUpperCase();
console.log(capitalName);
var smallName = secondName.toLowerCase();
console.log(smallName);

var squareRoot = Math.sqrt(100);
console.log(squareRoot);

var maxNumber = Math.max(20, 9999, 6900, 7200);
var minNum = Math.min(30, 500);
console.log(maxNumber);
console.log(minNum);

var power = Math.pow(8, 3);
console.log(power);

var number = 0.1234567890123;
var num1 = number.toFixed(5);
console.log(number);
console.log(num1);

var num2 = 60;
var num3 = 90;
console.log(num2 + num3);

var num4 = num2.toString();
var num5 = num3.toString();
console.log(num4 + num5);

var type1 = 999;
console.log(typeof type1);

var fruits = ["banana", "orange", "papaya", "mango"];
console.log(fruits);
console.log(fruits[1]);

var l = fruits.length;
console.log(l);

for (i = 0; i < l; i++) {
    console.log(fruits[i]);
}

fruits.push("apple");
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

fruits.unshift("pear");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.pop();
console.log(fruits);

var numbers = ["10", "2", "37", "5", "67"];
var maths = Math.max.apply(Math, numbers);
console.log(maths);
var maths2 = Math.min.apply(Math, numbers);
console.log(maths2);
var both = fruits.concat(numbers);
console.log(both);