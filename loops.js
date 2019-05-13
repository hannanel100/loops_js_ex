var n = 10;
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