//Objects
//Singleton Object : constructor :
Object.create

//Object Literals

let sym= Symbol(`mykey`)
const jsUser = {
    name:`nehasingh`,
   [sym]:`mykey1`,
    age:19,
    score:`33`
}
console.log(jsUser.name)
console.log(jsUser[`name`])
console.log(jsUser[sym])

jsUser.name = `hema singh`
// Object.freeze(jsUser)//after freez we can not change anything 
console.log(jsUser)

jsUser.greeting = function(){
    console.log(`js user here..${this.name} `)
}
console.log(jsUser.greeting())

//***************** using constructor ****************** */

const user = new Object()//singleton object
// const user1 = {} // non- singleton object
console.log(user)

let obj1 = {a: `neha`,b:`122`,c:`yeueu`}
let obj2 = {1:`222`, 2:`neha`,3:`iiiii`}

// let obj3 = Object.assign({},obj1,obj2) // conacat two objects in one 
let obj3 = { ...obj1, ...obj2}
console.log(obj3)

let user02 =[
    {
        email:`neha@gmail.com`,
        name:`nehasingh`
    },
    {},
    {}

]
user02[1].email
console.log(Object.keys(jsUser))
console.log(Object.values(jsUser))
console.log(Object.entries(jsUser))
console.log(jsUser.hasOwnProperty(`score`))//true or false values 





// ****************object destructure ********************

const sports = {
    game:`football`,
    player:12,
    score:200,
    isavailable : true,
    id : `11111`
}

const {score,player:play}=sports
console.log(score,play)