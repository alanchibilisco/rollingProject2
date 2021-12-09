import {
  requiredField,
  validateNumbers,
  validateURL,
  generalValidation,
} from "./helpers.js";

import { Product } from "./productClass.js";

import { random} from "./randomCode.js";

//variables

let inputCode = document.getElementById("code");
let inputCategory = document.getElementById("category");
let inputDescription = document.getElementById("description");
let inputModel = document.getElementById("model");
let inputBrand = document.getElementById("brand");
let inputPrice = document.getElementById("price");
let inputUrl = document.getElementById("url");
let form = document.getElementById("idForm");
let regProducts =
  JSON.parse(localStorage.getItem("regProductsLocalStorage")) || [];
export let regCode=JSON.parse(localStorage.getItem('regCodeKey')) || [];
let regUser=JSON.parse(localStorage.getItem('regUser')) || [];
let productExist = false;
let newBtn = document.getElementById("newBtn");
let msj=document.getElementById('msj');

//asociando los eventos

inputCategory.addEventListener("blur", () => {
  requiredField(inputCategory);
});

inputDescription.addEventListener("blur", () => {
  requiredField(inputDescription);
});

inputModel.addEventListener("blur", () => {
  requiredField(inputModel);
});

inputBrand.addEventListener("blur", () => {
  requiredField(inputBrand);
});

inputPrice.addEventListener("blur", () => {
  validateNumbers(inputPrice);
});

inputUrl.addEventListener("blur", () => {
  validateURL(inputUrl);
});

form.addEventListener("submit", saveProduct);

newBtn.addEventListener("click", cleanForm);

//llamo a la carga inicial de los productos en la tabla y de los usuarios

initCharge();
initChargeUser();


//funcion para guardar el producto
function saveProduct(e) {
  e.preventDefault();
  //primero verifico todas las validaciones
  if (
    generalValidation(
      inputCategory,
      inputDescription,
      inputModel,
      inputBrand,
      inputPrice,
      inputUrl
    )
  ) {
    if (productExist) {
      modifyProduct();
    } else {
      createProduct();
    }
  }
}

//funcion para crear un producto nuevo

function createProduct() {
  let newProduct = new Product(
    random(),
    inputCategory.value,
    inputDescription.value,
    inputModel.value,
    inputBrand.value,
    inputPrice.value,
    inputUrl.value
  );

  regProducts.push(newProduct);

  cleanForm();
  Swal.fire(
    "Producto creado",
    "Su producto fue correctamente cargado",
    "success"
  );

  createRow(newProduct);
}

//funcion para limpiar el formulario
function cleanForm() {
  form.reset();
  inputCategory.className = "form-control";
  inputDescription.className = "form-control";
  inputModel.className = "form-control";
  inputBrand.className = "form-control";
  inputPrice.className = "form-control";
  inputUrl.className = "form-control";
  msj.className='alert alert-danger my-5 d-none';
  saveRegProductsLocalStorage();
  regCodeLocalStorage();
  productExist = false;
}

//funcion para guardar el arreglo de productos dentro del localStorage
function saveRegProductsLocalStorage() {
  localStorage.setItem("regProductsLocalStorage", JSON.stringify(regProducts));
}

function regCodeLocalStorage(){
    localStorage.setItem('regCodeKey',JSON.stringify(regCode));
}
//funcion para crear una nueva fila en la seccion 2 y 3
function createRow(newProduct) {
  let productTable = document.getElementById("table");
  productTable.innerHTML += `<tr>
    <th scope="row">${newProduct.code}</th>
    <td>${newProduct.category}</td>
    <td>${newProduct.description}</td>
    <td>${newProduct.model}</td>
    <td>${newProduct.brand}</td>
    <td>${"$" + newProduct.price}</td>
    <td>${newProduct.url}</td>
    <td class="text-center"><button class="btn btn-warning" onclick="prepareEdit(${
      newProduct.code
    })"><i class="far fa-edit"></i></button> <button class="btn btn-danger" onclick='eraseProduct(${
    newProduct.code
  })'><i class="fas fa-trash"></i></button></td>
  </tr>`;
}

function createRowUser(user){
  let tableUser=document.getElementById('tableUser');
  tableUser.innerHTML+=`<tr>
  <th scope="row">${user.name}</th>
  <td>${user.email}</td>
  <td>${user.pass}</td>            
  <td class="text-center"><button class="btn btn-dark" onclick='eraseUser("${
    user.email}")'><i class="fas fa-trash"></i></button></td>
</tr>`;
}

//funcion para la carga inicial de la tabla tomando los datos de productos y usuarios desde el localStorage

function initCharge() {
  if (regProducts.length > 0) {
    regProducts.forEach((element) => {
      createRow(element);
    });
  }
}

function initChargeUser(){
  if(regUser.length>0){
    regUser.forEach((user)=>{ createRowUser(user);});  
  }
}

//funcion global para mostrar en los input los datos del producto que se desea editar

window.prepareEdit = function (code) {
  let wantedProduct = regProducts.find((product) => {
    return product.code === code;
  });
  inputCode.value = wantedProduct.code;
  inputCategory.value = wantedProduct.category;
  inputDescription.value = wantedProduct.description;
  inputModel.value = wantedProduct.model;
  inputBrand.value = wantedProduct.brand;
  inputPrice.value = wantedProduct.price;
  inputUrl.value = wantedProduct.url;
  productExist = true;
};

//funcion para modificar el producto y guardarlo dentro del localStorage

function modifyProduct() {
  let indexProduct = regProducts.findIndex((product) => {
    return product.code === parseInt(inputCode.value);
  });

  regProducts[indexProduct].description = inputDescription.value;
  regProducts[indexProduct].category = inputCategory.value;
  regProducts[indexProduct].model = inputModel.value;
  regProducts[indexProduct].brand = inputBrand.value;
  regProducts[indexProduct].price = inputPrice.value;
  regProducts[indexProduct].url = inputUrl.value;
  saveRegProductsLocalStorage();
  cleanTable();
  initCharge();
  Swal.fire(
    "Producto modificado",
    "Su producto fue correctamente cargado",
    "success"
  );

  cleanForm();
}

//funcion para limpiar la tabla de productos
function cleanTable() {
  let productTable = document.getElementById("table");
  productTable.innerHTML = "";
}

//funcion para borrar un producto de la lista

window.eraseProduct = function (code) {
  let newRegProd = regProducts.filter((product) => {
    return product.code != code;
  });

  let newRegCode=regCode.filter((codeReg)=>{
      return (codeReg!=code);
  })
  console.log(newRegCode);
  console.log(regCode);
  regProducts = newRegProd
  regCode=newRegCode;
  saveRegProductsLocalStorage();
  regCodeLocalStorage();
  cleanTable();
  initCharge();
  Swal.fire(
    "Producto eliminado",
    "Su producto fue correctamente eliminado",
    "success"
  );
  console.log(regCode);
};

window.eraseUser = function (email){
  let newRegUser=regUser.filter((user)=>{
    return (user.email!=email);
})
  console.log(regUser);
  console.log(newRegUser);
  regUser=newRegUser;
  localStorage.removeItem('regUser');
  localStorage.setItem('regUser', JSON.stringify(regUser));
  let tableUser=document.getElementById('tableUser');
  tableUser.innerHTML='';
  initChargeUser();
  Swal.fire(
    "Usuario Eliminado",
    "El Usuario fue correctamente eliminado",
    "success"
  );
};