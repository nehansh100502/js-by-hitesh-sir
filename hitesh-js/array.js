// array []
// array are resizable
// access from indexing 

//Shallow Copy : jo bhi mai change krugi original value me bhi change hoga 


//Deep Copy : nhi hoga 

const myArray = new Array(2,3,4,5,6)
console.log(myArray)

myArray.push(4)
// myArray.pop()
myArray.unshift(9)//add value in 0 index which is not good 
myArray.shift()//remove first index value 

// true or false 
console.log(myArray.includes(3))// true or false 

console.log(myArray.indexOf(3))// output is index value 

console.log(myArray)

const newarr = myArray.join() //change array into string type 
console.log(newarr)


const sn1 = myArray.slice(2,5)
console.log(`A :${sn1}`)

console.log(myArray)

const sn2 = myArray.splice(2,5)//its manipulate original array and cut the array and give new array with existing index values
console.log(`B :${sn1}`)
console.log(myArray)

let one = [1,4,3,5,664,223,1]
let two = [2,3,22,13,2,4322,,2]
console.log(one.concat(two));//join two array in one array


let three = [ ...one, ...two]//USING SPREAD OPERATOR  we can concat two or more array on one array 
console.log(three);

const multiplearray = [2,3,4,[4,5,3,[3,34,3]]]
console.log(multiplearray.flat(Infinity))

console.log(Array.isArray(`nehasingh`))//.true or false
console.log(Array.from(`nehasingh`))//it change the string into array


// *******interesting for interview **********node 
console.log(Array.from({name:`nehasingh`}))//output is []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//output is : [100,200,300]