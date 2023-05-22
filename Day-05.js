//prototype
//it makes several objects to share functions rather than loading them for several times
function Proto(captain,wickky){
this.captain=captain;
this.wickky=wickky;
}
Proto.prototype.team=function(){
    return "The captain is "+this.captain+" and wicket keeper is "+this.wickky;
}
 const team1=new Proto("Virat","Finn");
 const team2=new Proto("MSD","Conway");
 console.log(team1.captain);
 console.log(team2.captain);
 console.log(team1.team())

 //add new attribute
 Proto.prototype.league="IPL"
 console.log("They are RCB in "+team1.league)
 console.log("They are CSK in "+team1.league)

 //Inheritance
 //It is the ability to derive new classes from old classes
 class Cricket{
    constructor(country,league){//constructor method
        this.country=country;
        this.league=league;
    }
    telede=()=>{
return this.country+" "+this.league
    }
 }
class IPL extends Cricket{
   constructor(country,league,coach,board){
    super(country,league);
    this.coach=coach;
    this.board=board;
}
cheppanu=()=>{
    return this.coach+" "+this.board
}
}

const ip1=new IPL("INDIA","IPL","ravi shastry","BCCI")

const ip2=new IPL("ENGLAND","EPL","John Morris","BCCE")

console.log(ip1.telede())
console.log(ip2.cheppanu())

//static methods
//declared using static keyword 
class Cannes{
    static show(phrase){
        return phrase+" participated in cannes film festival 2023";
    }
}
console.log(Cannes.show("NM"))

class Web{
    static show1(name){
        
        console.log("Hello folks my name is "+name);
    }
    static show1(name){
       
        console.log("My name is "+name);
    }
}

Web.show1("Neeraj")


//calling static method in another static method
class Test{
    static tt1(){
        return "This is 1st static method";
    }
    static tt2(){
this.tt1();
return "This is 2nd static method";
    }
}
console.log(Test.tt2())