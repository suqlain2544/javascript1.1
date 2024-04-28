// there are two types of datatypes one is primitive and other or non primitive
// primitive data types use call by value and non premitive use call by reference
// call by value mean you assign the copy of the value when you call the primitive data type
// call by reference you provide reference of the data type 

// **********there are 7 primitive data types categories 
// 1 Number 2 Symbol 3 BigInt 4 stirng 5 bolean 6 null 7 undefined
const NumValue = 100;
const stringValue = "100"
const bloeanValue = false
const nullvalue = null
const symbol12 = Symbol (123)
const symbol123 = Symbol(123)
console.log(symbol12 === symbol123)
let useremail; // this undefined variable because no value given to this variable.

//************** * there are 3 non primitive or reference objects types 
// 1 Array 2 Objects 3 Functions
//Array
const buses =["doubledecker", "greenbuses","diselbuses" ]
//object
let user1= {
    useremail1:"givemoney",
    userid: 4,
    useraddress,

}
// function
const firstfunction = function(){
    console.log("hello world")
}