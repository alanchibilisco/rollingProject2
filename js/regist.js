//clase 
class User{
    constructor(name, email, pass){
        this.name=name;
        this.email=email;
        this.pass=pass;
    }
}

//variables
let formReg=document.getElementById('formReg');
let inputUserReg=document.getElementById('inputUserReg');
let inputEmailReg=document.getElementById('inputEmailReg');
let inputPassReg=document.getElementById('inputPassReg');
let regUser= JSON.parse(localStorage.getItem('regUser')) || [];


//agregando eventos

inputUserReg.addEventListener('blur',()=>{
    requiredField(inputUserReg);
});

inputEmailReg.addEventListener('blur', ()=>{
    validateEmail(inputEmailReg);
});

inputPassReg.addEventListener('blur', ()=>{
    validatePass(inputPassReg);
})

formReg.addEventListener('submit', saveUser);


//validaciones

function requiredField(input){
    if(input.value.trim().length>0){
        input.className='form-control is-valid';
        return true;
    }else{
        input.className='form-control is-invalid';
        return false;
    }
}

function validateEmail(input){
    let regEmail=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(regEmail.test(input.value)){
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
    }else{
        input.className='form-control is-invalid';
        return false;
    }
}

function gralValidate(inputUser, inputEmail, inputPass){
    if(requiredField(inputUser)&&validateEmail(inputEmail)&&requiredField(inputPass)){
       return true; 
    }else{
        return false;
    }
}

//funciones

function saveUser(e){
    e.preventDefault();
    if(gralValidate(inputUserReg, inputEmailReg, inputPassReg)){
        createUser();
    }
}

function createUser(){
    let newUser=new User(inputUserReg.value, inputEmailReg.value, inputPassReg.value);
    regUser.push(newUser);
    cleanFormUser();
    Swal.fire(
        "Usuario creado",
        "Su usuario fue correctamente cargado",
        "success"
      );
}

function cleanFormUser(){
    formReg.reset();
    inputUserReg.className='form-control';
    inputEmailReg.className='form-control';
    inputPassReg.className='form-control';
    saveUserLS();
}

function saveUserLS(){
    localStorage.setItem('regUser', JSON.stringify(regUser));
}