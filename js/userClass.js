 export class User{

    constructor(name, password, email){
        this.name=name;
        this.password=password;
        this.email=email;
    }

    set setName(name){
        this.name=name;
    }

    set setPassword(password){
        this.password=password;
    }

    set setEmail(email){
        this.email=email;
    }

    get getName(){
        return this.name;
    }

    get getPassword(){
        return this.password;
    }

    get getEmail(){
        return this.email;
    }


}



let usersReg=JSON.parse(localStorage.getItem('usersKey')) || [];

function saveUser(user){
    usersReg.push(user);
}

function userLocalStorage(){
    localStorage.setItem('usersKey',JSON.stringify(usersReg));
}