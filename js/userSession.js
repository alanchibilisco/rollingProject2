class SuperUser{   
    constructor(name, password){
        this.name=name;
        this.password=password;
    }
   get getName(){
       return this.name;
   }   
}

  export let superUser=new SuperUser('admin', 'admin');

/* function superUserLocalStorage(){
    localStorage.setItem('superUserKey', JSON.stringify(superUser));
}
superUserLocalStorage();*/
//fin clase superUsuario

//inicio clase usuarios generales
class User{
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

  export let invitado=new User('INVITADO', 'invitado', 'invitado@rollingtech.com');

function saveUser(user){
    usersReg.push(user);
}

function userLocalStorage(){
    localStorage.setItem('usersKey',JSON.stringify(usersReg));
}

/*saveUser(invitado);
userLocalStorage();*/
//fin clase usuarios generales.

//variables
let linkAdmin=document.getElementById('linkAdmin');

let userBtn=document.getElementById('userBtn');

/*console.log(linkAdmin);
console.log(userBtn);
linkAdmin.className='nav-link d-none';
userBtn.innerHTML=invitado.name;*/

//linkAdmin.className='nav-link d-none';

//forma de redirigir
//window.location.replace('admin.html');


