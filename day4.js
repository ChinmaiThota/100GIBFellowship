//objects
//creation using literal notation
let person={Name:'Java',age:30,qualification:'B.Tech',location:'India'}
console.log(person)

const person1={Name:'Python',age:35,qualification:"M.Tech",location:'US'}
console.log(person1)

//using new keyword
const player=new Object()
player['Name']="Virat"
player['age']=34
player['team']="RCB"
player['cost']="20cr"
console.log(player)

//using pre defined function
function Player(name,age,team,cost){
    this.name=name;
    this.age=age;
    this.team=team;
    this.cost=cost;
}
const player1=new Player('virat',34,'RCB','20cr')
const player2=new Player('Dev Padikkal',23,'RR','10cr')
console.log(player1)
console.log(player2)

//Accessing properties
console.log(player1['name']);
console.log(player2.name);


