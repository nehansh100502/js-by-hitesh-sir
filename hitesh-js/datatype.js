// primitive type 

// {
//     Number : 
//     String :
//     Bigint :
//     Symbol : Unique
//     Undefined : 
//     null : stand alone value
//     Boolean : true/false
// }
let state = 22
console.log(typeof undefined) //undefined
console.log(typeof null) //object


//CONVERSION
// let score = 33 
// let score = `33`
// let score = `33abc`  //not a number
// let score = null  //0
// let score = undefined  //not a number
// let score = true   //1
// let score = false   //0
let score1 = `nehasingh`   //not a number

console.log(typeof score1)
console.log(typeof(score1))

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)
console.log(valueInNumber)


//Number convert into Boolean 

// let score = 1 //true
//let score = 0 //false
// let score2= ``//false
// let score2=` `//true

// let booleanConversion = Boolean(score)
// console.log(booleanConversion)


//number to string 

let str = 33 // 33
let str1 = String(str)
console.log(str1)

// *******************operation***************

//negative number
let val=4
let negative = -val
console.log(negative)

//interesting converion

// console.log(2+`2`)//22
// console.log(`2`+2)//22
// console.log(`1`+2+2)//122
// console.log(1+2+`2`)//32

// console.log(+true)//1
// console.log(+``)//false or 0


//prefix (fisrt me implement)
//postfix(bad me implement)//suffix


console.log(`2`> 1); //automatic change string to number // true
console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0)//true // because null is convert into 0

// === (strict check datatype)




//******************Interviews DataTypes/Summary */************* */

// kis tarreke se data ko memory me rakha jata h or access kiya jata h is basis pe data type two type ke hote h 

// 1. primitive(7 types)//stack
String
Number
Boolean 
null
undefined
Symbol

const id = Symbol(`111`)
const anotherId = Symbol(`111`)
console.log(id===anotherId)//false

BigInt

const bigInt = 222222222222223333n;
console.log(bigInt)

//Reference type(Non-primitive)//Heap(original value change hogi )

Array
//[]
Object
//{}

Function
const fn = function(){}

//its a dynamic type language bacuase its not need to use varibale type decalration

// using typeof we can find datatype of any variable value 


// typeof operator Results 

undefined : undefined
Null : Object
Boolean : Boolean
Number: Number
String:String

Function: ObjectFunction
Array : Object
Object:Object




// ******************Stack/Heap*********************
//stack (primitive type )(copy milta h  original value nhi chang ehoti h)
//heap (non-primitive )(original value and reference change hota h )