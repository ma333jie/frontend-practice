// vo/ao->[1. arguements 2. fu 3. variable]

console.log(a1);
console.log(a1);
console.log(f1);

var a1 = 1;
var a2 = 2; 
var a3 = 'hello';
var a4 = {name: 'Jesses Sun'};

var res = f1(a1, a2);
console.log(res);

function f1(x,y){
	 var b1 = 30; 
	 var b2 = 40; 

	 console.log(x);
	 console.log(y);

	 function f2(){
	 	console.log('this is f2');
	 }
	 f2();
	 f2();

	 return x+y;
}