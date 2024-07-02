// Higher Oreder Function
// [{},{},{},{},{}]
//["","","","",""]

const arr = [2,3,4,1,3,12,32,2]
for (const i of arr){
    console.log(i)
}

const str = `neha singh`
for (const str1 of str){
    console.log(str1)
}

// Maps : is a object which hold key: value pairs 

const map = new Map()// hold uinique value and dont repeat value 
map.set(`IN`,`India`)
map.set(`IN`,`india`)
map.set(`INdonesia`,`indian`)
console.log(map)

for(const [key,value] of map){
    console.log(key,`:-` ,value)
}

// // object is not iterable here with for of 
// const user = {
//     name: `neha`,
//     age : 21

// }
// for (const [key,value] of user){
//     console.log(key,value)
// }

// we use for in loop for object
const user = {
        name: `neha`,
        age : 21
    
    }
    for (const key in user){
        console.log(` there is key ${key} and value pairs ${user[key]}`)
    }


    //for each 

    // const coding = [ 2,3,4,21,41,2]
    // coding.forEach( function (item){
    //     console.log(item)
    // })

    const coding = [ 2,3,4,21,41,2]
    coding.forEach( (item) => {
        console.log(item)
    })

    function printMe(item){
        console.log(item)
    }
    coding.forEach(printMe)

    coding.forEach ( (item, index, arr) =>{
        console.log( item, index, arr)
    })


    // in object how to use for each 

    const obj = [
        {
            name:`neha`,
            age:22
        },
        {
            name : `hema`,
            age:23
        },
        {
            name:`swati`,
            age : 33
        }
    ]
    obj.forEach( (name) => {
        console.log(name)
    })
    obj.forEach( (name) => {
        console.log(name.name)
    })

    // for each not return value 
    //filter is return value 


    //using filter & foreach method 

    const myNum = [2,3,4,5,5,6,77,5,4]
    let returnNum = myNum.filter( (num)=> num>=5 )
    console.log(returnNum) // output : [ 5, 5, 6, 77, 5 ] using filter method 

    const myNum1 = []
    myNum.forEach( (num)=>{
        if (num>4){
            myNum1.push(num)
        }
    })
    console.log(myNum1)//output : [ 5, 5, 6, 77, 5 ] using for each method 


    // using map method or chaining


    const newarr = [2,3,4,56,6,3]
    let arr1 = newarr
    .map( (num)=> num*10)
    .map( (num)=> num+1)
    .map( (num)=> num+num)
    console.log(arr1)


    // reduce : 

    let mynum01 = [2,12,3,5,12,32]

    const myTotal =mynum01.reduce( function(acc,crrval){
        console.log(`the value of acc ${acc} and currval ${crrval}`)
        return acc+crrval
        
    },0)

    console.log(myTotal)