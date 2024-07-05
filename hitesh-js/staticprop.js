class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
    static creatId(){//not give access to procced
        return `123`
    }
}
const hitesh = new User(`nehasingh`)
// console.log(hitesh.creatId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }

}
const iphone = new Teacher(`swati`,`i@phone.com`)
// console.log(iphone.creatId())//incthis static keyword is used so output is not come 
console.log(iphone)