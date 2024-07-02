// this keyword 
 let user = {
    username : `neha singh`,
    age : 22,
    sub: `Hindi`,
    Indian : true ,
    gender : function () {
        console.log(`hello and very good moernig ${this.username}`)// using this keyword here to access key r varible of objects
        // console.log(this)
    }
  
 }
 user.gender()
//  console.log(this)// output is {} but in browser inspect is global object Window 
// *******************************************//

 function greet(){
    // console.log(this)
    // console.log(this.username)//we can not access this context in function only in object 
 }
 greet()

 const greet1 = function(){
    // console.log(this)
    // console.log(this.username)// we can not access this context in this function we can only access it on object 
 }
greet()

const greet2 = () => {
    // console.log(this)
    // console.log(this.username)// we can not access this keyword in arrow function also 
}
greet2

// **************************arrow function *****************************//

const chai = (num1,num2)=>{
    return num1+num2
}
console.log(chai(2,4))


//IMPLICIT : implicit return : in which there is no need of {} or return keyword here and code will be onle line 
const chai01 = (num1,num2)=>num1+num2
console.log(chai01(2,4))

// ***************interesting ***************
// when we {return} return keyword is necessary but when we use () then return key word is not valid 
const chai02 = (num1,num2)=>(num1+num2)
console.log(chai02(2,4))
// EXPLICIT RETURN : explicit return : when we return keyword is a explicit keyword 

// when we try to access object in arrow function 
const chai03 = (num1,num2)=>(num1+num2 , {username:`neha singh`})
console.log(chai03(3,4))
