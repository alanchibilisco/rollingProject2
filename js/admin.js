import {requiredField, validateNumbers, validateURL, generalValidation} from "./helpers.js";

import{Product} from "./productClass.js";

import{random, regCodeLocalStorage} from "./randomCode.js";
//variables

let inputCode=document.getElementById('code');
let inputCategory=document.getElementById("category");
let inputDescription=document.getElementById('description');
let inputModel=document.getElementById('model');
let inputBrand=document.getElementById('brand');
let inputPrice=document.getElementById('price');
let inputUrl=document.getElementById('url');
let form=document.getElementById('idForm');
let regProducts=JSON.parse(localStorage.getItem('regProductsLocalStorage')) || [];

//asociando los eventos

inputCategory.addEventListener('blur', ()=>{
    requiredField(inputCategory);
})

inputDescription.addEventListener('blur', ()=>{
    requiredField(inputDescription);
})

inputModel.addEventListener('blur', ()=>{
    requiredField(inputModel);
})

inputBrand.addEventListener('blur', ()=>{
    requiredField(inputBrand);
})

inputPrice.addEventListener('blur', ()=>{
    validateNumbers(inputPrice);
})

inputUrl.addEventListener('blur', ()=>{
    validateURL(inputUrl);
})

form.addEventListener('submit', saveProduct);


//llamo a la carga inicial de los productos en la tabla

initCharge();


//funcion para guardar el producto
function saveProduct(e){
    e.preventDefault();
    //primero verifico todas las validaciones
    if(generalValidation(inputCategory, inputDescription, inputModel, inputBrand, inputPrice, inputUrl)){
        createProduct();
    }

}

//funcion para crear un producto nuevo

function createProduct(){
    let newProduct=new Product(random(), inputCategory.value, inputDescription.value, inputModel.value, inputBrand.value, inputPrice.value, inputUrl.value);
    //console.log(newProduct);
    regProducts.push(newProduct);
    //console.log(regProducts);
    cleanForm();
    Swal.fire(
        'Producto creado',
        'Su producto fue correctamente cargado',
        'success'
      )

      createRow(newProduct);
}

//funcion para limpiar el formulario
function cleanForm(){
    form.reset();
    inputCategory.className='form-control';
    inputDescription.className='form-control';
    inputModel.className='form-control';
    inputBrand.className='form-control';
    inputPrice.className='form-control';
    inputUrl.className='form-control';
    saveRegProductsLocalStorage();
    regCodeLocalStorage();
}

//funcion para guardar el arreglo de productos dentro del localStorage
function saveRegProductsLocalStorage(){
    localStorage.setItem('regProductsLocalStorage', JSON.stringify(regProducts));
}

//funcion para crear una nueva fila en la seccion 2
function createRow(newProduct){
    let productTable=document.getElementById('table');
    productTable.innerHTML+=`<tr>
    <th scope="row">${newProduct.code}</th>
    <td>${newProduct.category}</td>
    <td>${newProduct.description}</td>
    <td>${newProduct.model}</td>
    <td>${newProduct.brand}</td>
    <td>${"$"+newProduct.price}</td>
    <td>${newProduct.url}</td>
    <td class="text-center"><button class="btn btn-warning" type="submit"><i class="far fa-edit"></i></button> <button class="btn btn-danger" type="submit"><i class="fas fa-trash"></i></button></td>
  </tr>`
}

//funcion para la carga inicial de la tabla tomando los datos de productos desde el localStorage

function initCharge(){
    if(regProducts.length>0){
        regProducts.forEach(element => {
            createRow(element);
        });
    }
}