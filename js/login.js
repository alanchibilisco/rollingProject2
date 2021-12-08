let superUser={name:'admin', password:'admin'};


let inputUser=document.getElementById('inputUser');
let inputPass=document.getElementById('inputPass');
let formLogin=document.getElementById('formLogin');
let sesionInit=false;

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
            localStorage.setItem('stateSesion', JSON.stringify(sesionInit));
            localStorage.setItem('user', JSON.stringify(superUser));
            window.location.replace("index.html");

        }else{
            alert('Contraseña Incorrecta, ingrese nuevamente');
            console.log('contraseña incorrecta');
        }
    }else {}
    

    
}

