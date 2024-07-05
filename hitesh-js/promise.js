const promiseOne = new Promise(function (resolve,reject){
    //Do async task here 
    //DB calls . cryptocurrency , network
    setTimeout(function(){
        console.log(`async task is complete `)
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log(`promise consumed ..`);
})

new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log(`async task 2`)
        resolve()
    },1000)

}).then(function(){
    console.log(`async 2 resolved `)
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:`neha`,email:`nehasingh@gmail.com`})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:`neha`,email:`nehasingh@gmail.com`})
        }else{
            reject(`ERROR : something went wrong `)
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log(`the promise is either resolve and rejected ..`))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:`neha`,email:`nehasingh@gmail.com`})

        }else{
            reject(`ERROR : JS went wrong `)
        }
    },1000)
});
async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response);
   }catch(error){
        console.log(error)
   }
}
consumePromiseFive()




// async function getAllUsers(){
//     try{
//         const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
//         console.log(response)
//     // const data = response.json()
//     // console.log(data)
//     }
//     catch{
//         console.log(`error `,error)
//     }
// }
// getAllUsers()

fetch(`https://api.github.com/users/hiteshchoudhary`)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log((error)))


