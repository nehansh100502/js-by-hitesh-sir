class User{
    constructor(username){
        this.username = username
    }
    logMe (){
        console.log(`USername is ${this.username}`)
    }
}
class Teacher extends User {
    constructor(username,email,password){
        super(username)//we use super than call 
        this.email=email;
        this.password=password

    }
    addCourse(){
        console.log(`new course was added by ${this.username}`)
    }
}
const chai = new Teacher(`chai`,`nehasingh@gmail.com`,123)
console.log(chai)
chai.addCourse()