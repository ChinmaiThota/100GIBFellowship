//Arrays
let fam=['mom','dad','me','bro']
console.log(fam)
//array functions
console.log(fam.length)
console.log(fam.toString())
console.log(fam.pop())
fam.push('sis')
console.log(fam)
console.log(fam.shift())
console.log(fam)
fam.unshift('mom')
console.log(fam)
let fre=['Asritha','Keerthi']
let ff=fam.concat(fre)
console.log(ff)
ff.splice(3,0,"Neeraj","Thota")
console.log(ff)
ff.splice(4,1)
console.log(ff)
console.log(fam.slice(2))
fam[3]="bro"
console.log(fam)

//clock problem
var time=new Date()
console.log(time)
let clock=setInterval(()=>{
 var hrs=time.getHours()
 var min=time.getMinutes()
 var sec=time.getSeconds()
 if(hrs<10){
    hrs="0"+hrs;
 }
 if(min<10){
    min='0'+min;
 }
 if(sec<10){
    sc='0'+sec;
 }
 console.log(`${hrs}:${min}:${sec}`);
},3000);

