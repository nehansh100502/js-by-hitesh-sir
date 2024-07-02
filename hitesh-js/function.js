// function

function hello(num1,num2){
    return (num1+num2)
}
console.log(hello(2,4))

// Rest operator 
function sum(...num){ // using rest operator here 
    return num
}
console.log(sum(100,200,400,300,20))

// function scope and mini hoisting 
 
function greet(){
    const name = `nehasingh`
    function say(){
        const otherName= `hemasingh`
        console.log(`good morning ${name} & good morning ${otherName}`)
        return
    }
    say()
}
// console.log(otherName)//we conat access variable of inside function scope 
greet()

// *************************interesting ***********************

addone(3)
function addone(num){
    return num+2
}


// Hoisting : we cant access variable before declaration 
// addTwo(5)//its give error beacuase its not access before declaration 

const addTwo = function(num){ // here addtwo is as a function expression here 
    return num+2
}


//terniary operator here 

const tea = 40 
tea > 30 ? console.log(`tea price is grater than 30 `):console.log(`tea price is not afforadable`) 