let superUser={name:'admin', password:'admin'};
let regUser=JSON.parse(localStorage.getItem('regUser')||[]);
let inputUser=document.getElementById('inputUser');
let inputPass=document.getElementById('inputPass');
let formLogin=document.getElementById('formLogin');
let sesionInit=false;


//asociando eventos 
inputUser.addEventListener('blur',()=>{
    validateEmail(inputUser);
});
inputPass.addEventListener('blur',()=>{
    validatePass(inputPass);
});
formLogin.addEventListener('submit', login);


//funciones

function login(e){
    e.preventDefault();
    console.log(inputUser.value);
    console.log(inputPass.value);
    if(gralValidate(inputUser, inputPass)){
        if(inputUser.value===superUser.name){
            if(inputPass.value===superUser.password){
                sesionInit=true;                
                sessionStorage.setItem('stateSesion', JSON.stringify(sesionInit));
                localStorage.setItem('user', JSON.stringify(superUser));
                window.location.replace("index.html");
    
            }else{
                alert('Contraseña Incorrecta. Ingrese nuevamente');    
            }
        }else if(inputUser.value===findUser(inputUser.value).email){           
            if(inputPass.value===findUser(inputUser.value).pass){    
                let newUser=findUser(inputUser.value);
                sesionInit=true;
                sessionStorage.setItem('stateSesion', JSON.stringify(sesionInit));
                localStorage.setItem('user', JSON.stringify(newUser));   
                window.location.replace("index.html");
            }else{
                alert('Contraseña Incorrecta. Ingrese nuevamente');
            }
        }else{
            alert('Usuario Incorrecto. Ingrese nuevamente');
        }
    }else{
        alert('Debe completar todos los campos');
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

//validaciones

// function requiredField(input){
//     if(input.value.trim().length>0){
//         input.className='form-control is-valid';
//         return true;
//     }else{
//         input.className='form-control is-invalid';
//         return false;
//     }
// }

function validateEmail(input){
    let regEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(regEmail.test(input.value)){
        input.className='form-control is-valid';
        return true;
    }else if(input.value.trim().length>0&&input.value.trim().length<6){
        input.className='form-control is-valid';
        return true;
    }else{
        input.className='form-control is-invalid';
        return false;
    }
}

function validatePass(input){
    let regPass=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if(regPass.test(input.value)){
        input.className='form-control is-valid';
        return true;
    }else if(input.value.trim().length>0&&input.value.trim().length<6){
        input.className='form-control is-valid';
        return true;
    }else{
        inputPass.className='form-control is-invalid';
    }
}

function gralValidate(inputUser, inputPass){
    if(validateEmail(inputUser)&&validatePass(inputPass)){
       return true; 
    }else{
        return false;
    }
}
