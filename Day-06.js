//call back fun
console.log("Let us start the class")
setTimeout(function(){//anonymous fun
console.log("class is boring");
},5000)
console.log("End session pls!!")

//promises
//A promise is a JS object contains both producing code and consuming code it has 3 states
//pending-result is undef
//fulfilled-result is value
//rejected-result is error
const myPromise=new Promise((resolve,reject)=>{
   let cond=-1;
   if(cond<0){
    resolve("promise is resolved successfully and then() method will be called");
} 
else{
    reject("Promise is rejected and catch()method will be called");
}
});
myPromise.then((message)=>{
console.log(message);
}).catch((message)=>{
    console.log(message);
});


