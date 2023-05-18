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

<!--Events-->
<!--The change in state of an object is called an Event-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Enter your name:<input type="text" id="id1" onfocus="onnfocus()" ><br><br>
    <script type="text/Javascript">
        function whenclick(){
document.write("You clicked me!!");
        }
        function hover(){
            document.write("This button will take you to home page")
        }
        function onnfocus(){
            document.getElementById("id1").style.background="green"
        }
        function keydow(){
            alert("You pressed a key!!")
        }
    </script>
    <input type="button" value="click here" onclick="whenclick()"><br><br>
    <input type="button" value="home page" onmouseover="hover()"><br><br>
    enter a key:<input type="text" onkeydown="keydow()"><br><br>

</body>
</html>


