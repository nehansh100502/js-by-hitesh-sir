class User {
    constructor(email,username,password){
        this.email = email;
        this.username = username;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
        return this._password
    }
    set password(value){
        this._password=value
    }
}
const name = new User(`neha`,`neha@gmail,com`,123)
console.log(name.password)
console.log(name.email)

