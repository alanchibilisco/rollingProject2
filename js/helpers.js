/*funcion campo requerido, aplica la clase is-valid o is-invalid 
en funcion de que si completa el campo del input o no*/

export function requiredField(input) {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

/*funcion validar numeros con una expresion regular, valida 
que sea de 0 a 9, con 1 digito como minimo y 9 como maximo*/

export function validateNumbers(input) {
  let regEx = /^[0-9]{1,9}$/;
  if (regEx.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

//funcion validar url

export function validateURL(input) {
  let regExURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (regExURL.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

//funcion validacion general en el formulario

export function generalValidation(
  inputCategory,
  inputDescription,
  inputModel,
  inputBrand,
  inputPrice,
  inputUrl
) {
  let msj = document.getElementById("msj");
  if (
    requiredField(inputCategory) &&
    requiredField(inputDescription) &&
    requiredField(inputModel) &&
    requiredField(inputBrand) &&
    validateNumbers(inputPrice) &&
    validateURL(inputUrl)
  ) {
    msj.className = "alert alert-danger my-5 d-none";
    return true;
  } else {
    msj.className = "alert alert-danger my-5";
    return false;
  }
}
