const prompt=require("prompt-sync")({sigint:true})
var num=prompt("enter a number:");
for(let i=1;i<=num;i++){
    console.log(i);
}

console.log(+200);
console.log(+false);
console.log(+"hello");

for(let i=1;i<=100;i++){
   console.log( i%3==0?i%5==0?"FizzBuzz":"Fizz":i%5==0?"Buzz":i);
}

for(let i = 1; i <= 50; i++){
    const ans = (i%3 === 0 && i%5 === 0) ? "fizzbuzz" : (i%3 === 0 ? "fizz" : (i%5 === 0 ? "buzz" : i));
    console.log(ans);
}

//strings
let names="javascript";
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

//string interpolation
var my="chin"
const msg=`Hello ${my} you are selected for my company congrats ${my}`
console.log(msg)

//escape seq chars
var nam='chin\'s'
console.log(nam)

//slice
var s1='here we go ok folks'
console.log(s1.slice(0,4))//last is exclusive
console.log(s1.slice(4))//it is start position
console.log(s1.slice(4,))

//functions
function funmane()
//funname.call(this,arg1,arg2....) we can call like this

//string functions
let mystr="javascript"
console.log(mystr.length)
console.log(mystr.substring(4,))
console.log(mystr.replace("script","island"))
console.log(mystr.toUpperCase())
console.log(mystr.toLowerCase())
console.log(mystr.concat(" web3 classes"))
console.log(mystr.charAt(0))
console.log(mystr.slice(-6,-1))
