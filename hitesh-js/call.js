function SetUsername(username){
    //complex DB calls 
    this.username= username
}
function createUser(username,email,password){
    SetUsername.call(this.username)//beacuse we want to hold refernce isiloye call use kiya 

    this.email=email
    this.password= password
}

const chai = new createUser(`chai`,`chai@gmail.com`,123)
console.log(chai)