let regProducts =
  JSON.parse(localStorage.getItem("regProductsLocalStorage")) || [];

  let productsCards = document.getElementById("productsCards");

let filter = document.getElementById("filter");
console.log(filter.value);
 regProducts.forEach(product => {

     createCard(product);

 });

//funcion para crear las cards de los productos almacenados en localStorage
function createCard(product) {
  
  
  productsCards.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-6 my-2">
    <div class="card">
      <div class="card-body">
        <img src="${product.url}" alt="${"Imagen de " + product.description}" 
        onerror="this.src='img/image-not-found.png';" width=100%>
        <h5 class="card-title">${
          product.description + "-Modelo-" + product.model
        }</h5><h6 class="card-title">${
    "Categoria: " + product.category
  }</h6><span class="badge rounded-pill bg-dark">${
    "$ " + product.price + ",00"
  }</span></h5>
      </div>
    </div>
  </div>`;
}

filter.addEventListener("change", () => {
  filterProd(filter.value);
});

function filterProd(value) {
  if (value === "Todo") {
    productsCards.innerHTML='';
    regProducts.forEach((product) => {
      createCard(product);
    });
  }else if(value==='A-Z'){

  }else{
    productsCards.innerHTML='';
    let newRegProd = regProducts.filter((product) => {
      return product.category === value;
    });
    newRegProd.forEach((product)=>{
      createCard(product);
    });
  }  
}
