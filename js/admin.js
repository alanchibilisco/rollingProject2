import {requiredField, validateNumbers, validateURL, generalValidation} from "./helpers.js";

import{Product} from "./productClass.js";

import{random} from "./randomCode.js";
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
    console.log(newProduct);
}