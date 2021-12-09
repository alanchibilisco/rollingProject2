let superUser={name:'admin', password:'admin'};
let regUser=JSON.parse(localStorage.getItem('regUser'));
//console.log(regUser);
let inputUser=document.getElementById('inputUser');
let inputPass=document.getElementById('inputPass');
let formLogin=document.getElementById('formLogin');
let sesionInit=false;


//asociando el evento submit
formLogin.addEventListener('submit', login);

function login(e){
    e.preventDefault();
    console.log(inputUser.value);
    console.log(inputPass.value);
    if(inputUser.value===superUser.name){
        if(inputPass.value===superUser.password){
            sesionInit=true;
            //console.log('ingresado desde admin');
            localStorage.setItem('stateSesion', JSON.stringify(sesionInit));
            localStorage.setItem('user', JSON.stringify(superUser));
            window.location.replace("index.html");

        }else{
            alert('Contraseña Incorrecta. Ingrese nuevamente');
            //console.log('contraseña incorrecta');
        }
    }else if(inputUser.value===findUser(inputUser.value).email){
        //console.log('desde '+findUser(inputUser.value).email);
        if(inputPass.value===findUser(inputUser.value).pass){
            //console.log('correctamente logeado');
            let newUser=findUser(inputUser.value);
            sesionInit=true;
            localStorage.setItem('stateSesion', JSON.stringify(sesionInit));
            localStorage.setItem('user', JSON.stringify(newUser));
            //console.log('fin logeo usario: '+newUser.name);
            window.location.replace("index.html");
        }else{
            alert('Contraseña Incorrecta. Ingrese nuevamente');
        }
    }else{
        alert('Usuario Incorrecto. Ingrese nuevamente');
    }

    

    
    
  

    
}

function findUser(email){
    let newUser=regUser.find((user)=>{
        return (user.email===email)
    });
    if(newUser!==undefined){
        return newUser;
    }else{
        return '';
    }
    
}