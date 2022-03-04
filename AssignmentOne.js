//Write a js program to print all odd number between 1 to 100.
for (let i = 1; i <=100; i++){
    if(i%2 !=0){
        console.log(i);
    }
}
// Write a js program to find sum of all natural numbers between 1 to n.

let number = 40;//+prompt('Enter a positive integer: ');

let sumb = 0;

for (let i = 1; i <= number; i++) {
    sumb += i;
}

console.log('The sum of natural numbers:', sumb);
// Write a js program to find sum of all even numbers between 1 to n.
let number1 = +prompt('Enter a even number: ');

let sum1 = 0;

for (let i = 1; i <= number1; i++) {
    if(i%2 ==0){
    sum1 += i;
    }
}
console.log('The sum of even numbers:', sum);
// Write a js program to find sum of all odd numbers between 1 to n.
let number2 = +prompt('Enter a odd number: ');

let sum = 0;

for (let i = 1; i <= number2; i++) {
    if(i%2 !=0){
    sum += i;
    }
}
console.log('The sum of odd numbers:', sum);
// Write a js program to print multiplication table of any number.

let table = +prompt("Enter the number :");
for(let i = 1;i<=10;i++){
    console.log(table + "x" + i + "="+ table*i);
}

// Write a js program to count number of digits in a number.
function char(num){
    
    console.log(num.toString().length);
}
let num1 = 100;
char(num1);

//with while loop
function digits_count(n) {
    let count = 0;
    if (n >= 1) {++count};
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
  }


//where r is the radius and h is the height of the cylinder.

function volCylender(h,r,pi){
    pi = 3.14;
   return h * r**2 * pi;
}
let h = 15;
let r = 14;
let v = volCylender(h,r);
console.log(v);

// Write a js program to find maximum between two numbers.
let numC = 40;
let numB = 50;
    if(numC>numB){
        console.log(numC);
    }else if(numC < numB){
        console.log(numB);
    }


// Write a js program to find maximum between three numbers.
function maxNum1(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }else if(num1 < num2 && num2 > num3){
        console.log(num2);
    }else {
        console.log(num3);
     }
}
// let num1 = 10;
// let num2 = 40;
// let num3 = 50;
maxNum1(10,40,50);

// Write a js program to check whether a number is negative, positive or zero.
function numCheck(num){
    if(num == 0){
        console.log("Number is Zero");
    }else if (num > 0){
        console.log("Number is Positive");
    }else{
        console.log("Number is Negtive");

    }
}
let numin = 12;
numCheck(numin);
// Write a js program to check whether a number is divisible by 5 and 11 or not.
function div(num){
    if (num%5 == 0 ){
        console.log("Number is divisible by 5")
    }else if(num%11 == 0){
        console.log("Number is divisible by 11")
    }
    
}
let numdiv = 10;
div(numdiv);
// Write a js program to check whether a number is even or odd.
let numEv = 14;
    if(numEv%2 == 0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
    
// Write a js program to check whether a year is leap year or not.
function leapYear(year){
    if(year%4 == 0){
        console.log("This is a leap year");
    }else{
        console.log("This is not a leap year");       
    }
}
let year = 2020;
leapYear(year);
// Write a js program to check whether a character is alphabet or not.
function chkAlph(name){
    if(name >= "a" && name <= "z" || name >= "A" && name <= "Z"){
        console.log("This is albhbet");
    }
    else{
        console.log("This is not albhbet");
    }
}
let nameAlp = "A";

chkAlph(nameAlp);
// Write a js program to input any alphabet and check whether it is vowel or consonant.
function chkAlpho(name){
    if(name == "a" || name == "e" || name =="i"|| name =="o"||name =="u"){
        console.log("This alphabet is owel")
    }else if(name == "A" || name == "E" || name =="I"|| name =="O"||name =="U"){
        console.log("This alphabet is owel")
    }
    else{
        console.log("This alphabet is constunt");
    }

}
let name1 = "e";

chkAlpho(name1);
// Write a js program to input any character and check whether it is alphabet, digit or special 
function chkAlphn(name){
    if(name >= "a" && name <= "z"){
        console.log("This is albhbet");
    }else if(name >= "A" && name <= "Z"){
        console.log("This is albhbet");
    }else if ( name >= 0 && name <=9){
        console.log("This is Digit");
    }
    else{
        console.log("This is special character");
    }
}
let nameJ = "0";
chkAlphn(nameJ)
// Write a js program to find cube of any number using function.
// function cube(num){
//     console.log(num**3);
// }
// let num = +prompt("Enter the number");
// cube(num);
// Write a js program to find diameter, circumference and area of circle using functions.
//diameter
function diameter(r){
    console.log(2*r);
}
let radu = 2;
diameter(radu);
// circumference
function circumference(r,pi){
    pi = 3.14;
    console.log(2*pi*r);
}
let radi = 2;
circumference(radi)
//area of circle
function careaOfCircle(r,pi){
    pi = 3.14;
    console.log(pi*r**2);
}
let rad = 2;
careaOfCircle(rad)
// Write a js program to find maximum and minimum between two numbers using functions.
//max number
function maxNum(numZ,numX){
    if(numZ>numX){
        console.log(numZ);
    }else if(numZ < numX){
        console.log(numX);
    }
}
let numZ = 50;
let numX= 40;
maxNum(numZ,numX);
// min number
function minNum(numN,numM){
    if(numN>numM){
        console.log(numN);
    }else if(numN < numM){
        console.log(numN);
    }
}
let numN = 50;
let numM= 40;
minNum(numN,numM)
//Write a js program to check whether a number is even or odd using functions.
function numberEvenOdd(num){
    if(numEve%2 == 0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
    }
    let numEve = 9;
    numberEvenOdd(numEve);
//Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
//prime number
function primeNum(n) {

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`;
        }
    }
    return `${n} is a prime number`
}
console.log(primeNum(2));
// armstring
//using while loop
let num = 98765;
let temp = num;
let sum5 = 0;
let nob = num.toString().length;
while(temp>0){
    let digit= temp%10;
    sum5 += digit**nob;
    temp = parseInt(temp/10); //parseInt using float to int.
}
if(sum5 == num){
    console.log(`${num} is an armstrong number`);
}
else{
    console.log(`${num} is not an armstrong number`)
}
//using function
let numb = 153;
function armString(numb){
let temp = numb;
let sum = 0;
let nob = numb.toString().length;
while(temp>0){
    let digit= temp%10;
    sum += digit**nob;
    temp = parseInt(temp/10);
}
if(sum == numb){
    console.log(`${numb} is an armstrong number`);
}
else{
    console.log(`${numb} is not an armstrong number`)
}
}
armString(numb);



//Perfect number
function perfectNum(n) {
    let sum = 0;

    for (let i = 1; i <=n/2; i++) {
        if (n % i === 0) {
            sum +=i;
        }
    }
    if(sum === n && sum !==0){
    console.log(`${n} is a perfect number`);
    }
    else{
    console.log(`${n} is not a perfect number`);
        
    }
}
perfectNum(6);


//Write a js program to find maximum between two numbers using conditional operator.
let numFirst = 40;
let numTwo = 50;
    if(numFirst>numTwo){
        console.log(numFirst);
    }else if(numFirst < numTwo){
        console.log(numTwo);
    }
//Write a js program to find maximum between three numbers using conditional operator.
let numF = 40;
let numS = 30;
let numT = 10;
if(numF > numS && numF > numS){
    console.log(numF);
}else if(numF < numS && numS > numT){
    console.log(numS);
}else {
    console.log(numT);
 }
//Write a js program to check whether a number is even or odd using conditional operator.
let numEven = 14;
    if(numEven%2 == 0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
//Write a js program to check whether year is leap year or not using conditional operator.
let yea = 2009;
if(yea%4 == 0){
    console.log("This is a leap year");
}else{
    console.log("This is not a leap year");       
}
//Write a js program to check whether character is an alphabet or not using conditional operator.
let alpN = "a"
if(alpN >= "a" && alpN <= "z" || alpN >= "A" && alpN <= "Z"){
    console.log("This is albhbet");
}
else{
    console.log("This is not albhbet");
}
