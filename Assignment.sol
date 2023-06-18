// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract arithmeticOperations{
    event called(int indexed value);
     event called(uint key,string indexed val);
    int public num1=5;
    int public num2=6;
    int public ans;
    uint256 public ns1=3;
    uint256 public ns2=4;
    string private str1="solidity by 100GIB";
    function add(int _num1,int _num2) public{
        ans=_num1+_num2;
        emit called(ans);
    }
//create ac fun that accepts two num and check greater one
function compChey(uint _a,uint _b)public pure returns(string memory){
    if(_a>_b){
        return "A is greater";
}
else if(_a<_b){
    return "B is greater";
}
else{
    return "equal";
}

}
//mapping 
mapping(uint => string)public db;
function mapTo(uint _key,string memory value)public{
db[_key] = value;
emit called(_key,value); 
}
//arrays
uint256[] public myArray;
function addEle(uint _element)public{
    myArray.push(_element);

}
function updateElement(uint256 _index,uint _newvalue)public{
    require(_index < myArray.length,"Index out of Bound");
    myArray[_index]=_newvalue;
}

function deleteEle(uint _index)public{
    require(_index < myArray.length,"Index out of Bound");
    if(_index<myArray.length-1){
myArray[_index]=myArray[myArray.length-1];

    }
    myArray.pop();
}

}
