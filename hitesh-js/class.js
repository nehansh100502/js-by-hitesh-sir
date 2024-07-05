// //ES6

// // class is a keyword 
// class User{
//     constructor(username,email,password){
//         this.email = email;
//         this.username=username;
//         this.password=password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     chnageUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User(`neha`,`nehasingh@g,ail.com`,123)
// console.log(chai.encryptPassword())
// console.log(chai.chnageUsername())

// //behind the scene 

function User(username,email,password){

        this.email = email;
        this.username=username;
        this.password=password;
    }

    User.prototype.encryptPassword=function(){
        return `${this.password}abc`
    }
    
const tea = new User(`neha`,`nehasingh@g,ail.com`,123)
console.log(tea.encryptPassword())
// console.log(chai.chnageUsername())
