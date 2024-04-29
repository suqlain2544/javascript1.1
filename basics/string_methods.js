
const name = "Suqlain"   // here name is string literal (primitive)
const name1 = "Suqlianahmad" // is also string literal (primitive) 
const name2 = "suqlainahmad1" // string literal (primitive)
console.log(name1.toUpperCase())
console.log(name1.length)
const string1  = new String("howareyoubrother");  // string1 is string object when we declare with new String() method
//A String object can always be converted to its primitive counterpart with the valueOf() method.
console.log(string1.valueOf())
console.log(string1)
// both string literals and String objects can access the same set of methods and properties defined on the String.prototype object. The difference lies in how they are accessed and whether the string is mutable or immutable. String literals are simpler to work with and are usually preferred unless you specifically need the features provided by String objects.
console.log(string1.lastIndexOf("b"))
console.log(string1.charAt(4))
console.log(string1.split("w"))//This method splits a string into an array of substrings based on a specified separator and returns the array.
console.log(string1.trim())//This method removes whitespace from both ends of a string.
console.log(name1.slice(2,5)) // this method extracts a section of a string and returns it as a new string. The extracted part starts from the startIndex parameter and extends up to, but not including, the endIndex parameter.