import {requiredField, validateNumbers, validateURL, generalValidation} from "./helpers.js";
//variables

let inputCode=document.getElementById('code');
let inputCategory=document.getElementById("category");
let inputDescription=document.getElementById('description');
let inputModel=document.getElementById('model');
let inputBrand=document.getElementById('brand');
let inputPrice=document.getElementById('price');
let inputUrl=document.getElementById('url');

console.log(inputCategory);
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