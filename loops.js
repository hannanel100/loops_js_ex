var n = 50;
/*1. prints all numbers from 1 to n with while
var count = 1;
while(count <= n){
    console.log(count);
    count++;
}
*/
/*2. prints numbers from n to 1 with while
var count = 0;
while(count < n){
    console.log(n - count);
    count++;
}
*/
/*3.print even numbers from 1 to n using while
var count = 1;
while (count <= n) {
    if (count % 2 == 0) {
        console.log(count);
    }
    count++;
}
*/
/*4.prints sum of numbers from 0 to n using for
var sum = 0;
for (var i = 0; i < n; i++){
    sum += i;
}
console.log(sum);
*/
/*5.print multiplation board using nested loops

for (var i = 0; i < n; i++){
    var row = "";
    for(var j = 0; j < n; j++){
        if(((i+1)*(j+1))<10){
            row = row + "  " + ((i+1)*(j+1));    
        }
        else{
            row = row + " " + ((i+1)*(j+1));
        }
    }
    console.log(row);
}
*/
/*6.reverse number using loops
var num = 54321;
var temp = num;
var rev = 0;
while (temp >= 1){
    rev = (rev * 10) + (temp % 10);
    temp = Math.floor(temp / 10);
}
console.log(rev);
*/
/*7.checking if number is a palindrom
var num = 12321;
var temp = num;
var rev = 0;
while (temp >= 1){
    rev = (rev * 10) + (temp % 10);
    temp = Math.floor(temp / 10);
}
if (rev == num){
    console.log(num + " is a palindrom");
}
else{
    console.log(num + " is not a palindrom");
}
*/
/*8. calculating 4th power of num when num is bigger than 1
var pow = 4;
var num = 4;
var result = 1;
for(var i = 0; i < pow; i++){
    result = result*num;
}
console.log(result);
*/
/*9. calculating the factorial of num
var num = 0;
var result = 1;
for(var i = 0; i < num; i++){
    result = result*(num-i);
}
console.log(result);
*/
/*11. checking if n is a prime number
isPrime = true;
for (var i = 2; i < n; i++ ){
    if(n % i == 0){
        console.log("Not prime");
        isPrime = false;
        break;
    }
    isPrime = true;   
}
if(isPrime == true){
    console.log("Prime");
}
*/
/*12.checking if num is an armstrong number
var temp = n;
var armsNum = 0;
while(temp > 0){
    armsNum = armsNum + Math.pow((temp % 10), 3);
    temp = Math.floor(temp / 10);
}
if(armsNum == n){
    console.log(n + " is an armstrong number");
}
else{
    console.log(n + " is not an armstrong number");
}
*/
/*13. checking if num is a perfect number
var perfectNum = 0;
for(var i = 0; i<=n/2; i++){
    if((n % i) == 0){
        perfectNum += i;
    }
}
if(perfectNum == n){
    console.log(n + " is a perfect number");
}
else{
    console.log(n + " is NOT a perfect number");
}
*/
/*14. printing out fibonnaci series from 1 till n
var current = 1;
var beforeCurrent = 0;
var temp;
var fib = current;
for(var i = 0; i < n; i ++){
    temp = current;
    current += beforeCurrent;
    beforeCurrent = temp;
    fib =fib + " , " + current.toString();
    //console.log(fib);  
}
console.log(fib);
*/