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
    useraddress:undefined

}
// function
const firstfunction = function(){
    console.log("hello world")
}

//   Stack (values of primitive data types saves in stack memory)
// Heap (values of nonprimitive data types saves in heap memory)

let saqi = "suqlain ahmad"
let man0 = saqi
man0 = "manwinder kaur"
console.log(saqi)
console.log(man0)
// you can see on above the value of saqi gives to man0 as a copy not as reference the original value doesnot change remains there

let userone={
         age:9,
         name:"mano"

}
let user2 = userone;
user2.age=8
console.log(userone.age)
console.log(user2.age)
// now you can see above example in primitive data types variable gives refrence to value upon call 
// other than copy of the value so when you change the value the original value is also changed. like 
//in this case age of userone is also changed to 8 before change the original value is 9.