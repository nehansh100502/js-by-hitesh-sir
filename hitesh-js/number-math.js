//Number and math
const num=400
console.log(num)

const num1 = new Number(100)
console.log(num1)
console.log(num1.toString().length)
console.log(num1.toFixed(2))

// When use toPrecision always remember that priority should be before decimal
const score = 222.44//after decimal value will be round off and give output only 222
console.log(score.toPrecision(3))

const score1=322.44
console.log(score1.toPrecision(2))//output 3.2e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString(`en-In`))
// read about MAX and MIN from mdn documentation 




// ***********************Math*****************************************

//console.log(Math) // object [Math] {}
console.log(Math.abs(-4))//negative value should change into positive and  positive value remain same and as it is .//absolute
console.log(Math.round(2.3))//2
console.log(Math.round(4.6))//5
console.log(Math.ceil(3.4))//4
console.log(Math.floor(3.6))//3
console.log(Math.min(2,3,4,5,2))
console.log(Math.max(4,3,42,4))


console.log(Math.random())//0-1 between value come 
console.log(Math.floor(Math.random()*10) +1);

let min = 10
let max = 20

console.log(Math.floor(Math.random()* (max-min+1)) +min)