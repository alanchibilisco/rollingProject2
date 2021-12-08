class SuperUser{   
    constructor(name, password){
        this.name=name;
        this.password=password;
    }
   get getName(){
       return this.name;
   }   
}

let superUser=new SuperUser('admin', 'admin');


let inputUser=document.getElementById('inputUser');
let inputPass=document.getElementById('inputPass');
let formLogin=document.getElementById('formLogin');
export let sesionInit=false;

//console.log(superUser);
//console.log(inputUser.value);
//console.log(inputPass.value);
//asociando el evento submit
formLogin.addEventListener('submit', login);

function login(e){
    e.preventDefault();
    console.log(inputUser.value);
    console.log(inputPass.value);
    if(inputUser.value===superUser.name){
        if(inputPass.value===superUser.password){
            sesionInit=true;
            console.log('ingresado desde admin');
            window.location.replace("index.html");

        }else{
            alert('Contraseña Incorrecta, ingrese nuevamente');
            console.log('contraseña incorrecta');
        }
    }else {}
    

    
}

