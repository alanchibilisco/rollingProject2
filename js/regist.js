

let formReg=document.getElementById('formReg');
let inputUserReg=document.getElementById('inputUserReg');
let inputEmailReg=document.getElementById('inputEmailReg');
let inputPassReg=document.getElementById('inputPassReg');





//funciones
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

function gralValidate(inputUser, inputEmail, inputPass){
    if(requiredField(inputUser)&&validateEmail(inputEmail)&&requiredField(inputPass)){
       return true; 
    }else{
        return false;
    }
}