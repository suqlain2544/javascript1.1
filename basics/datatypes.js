"use strict"; // treat all js code as new version
//alert(3+2) // this is node js not browser first in node we need to define the alert before use
console.log("suqlain")
let age =5;
let name ="suqlain"
console.log(age)
console.log(typeof age )
let login = false
console.log(typeof login)
// null type object // null should be empty
// undefined type undefined 
// bigInt 
// number = 2 to power 53
// string =""
// symbol = unique
// bolean = false/true
// All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.
/*All primitive types, except null, can be tested by the typeof operator. typeof null returns "object", so one has to use === null to test for null.

All primitive types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values. For example, the Number object provides methods like toExponential(). When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead. However, accessing a property on null or undefined throws a TypeError exception, which necessitates the introduction of the optional chaining operator.

Type	typeof return value	Object wrapper
Null	"object"	N/A
Undefined	"undefined"	N/A
Boolean	"boolean"	Boolean
Number	"number"	Number
BigInt	"bigint"	BigInt
String	"string"	String
Symbol	"symbol"	Symbol
The object wrapper classes' reference pages contain more information about the methods and properties available for each type, as well as detailed descriptions for the semantics of the primitive types themselves.*/