const user = {
    username : `nehasingh`,
    loginCount :8,
    signedIn :true,
    getUserDetails : function(){
        console.log(`got user deatails from database `)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())

function User(username , loginCount,isLoggedIn){
    this.username= username;
    this.isLoggedIn=isLoggedIn;
    this.loginCount=loginCount;
    return this 
}
const userOne = new User(`nehasingh_10`,12,true)

console.log(userOne)

//constructor: always give new instance 
// new object create 
//call constructor function using new keyword which pack all arguments and give u 
// arguments are enjected 
//give u in function 

