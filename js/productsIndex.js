let regProducts =
  JSON.parse(localStorage.getItem("regProductsLocalStorage")) || [];

let productsCards = document.getElementById("productsCards");

let filter = document.getElementById("filter");

regProducts.forEach((product) => {
  createCard(product);
});

//funcion para crear las cards de los productos almacenados en localStorage
function createCard(product) {
  productsCards.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-6 my-2">
    <div class="card shadow bg-light border border-0">
      <div class="card-body">
      <a href="eror404.html"><img src="${product.url}" alt="${
    "Imagen de " + product.description
  }" 
        onerror="this.src='img/image-not-found.png';" class='imgCard'></a>
        <h5 class="card-title">${product.description}</h5>
        <h5 class="card-title">${"Modelo-" + product.model}</h5>
        <h6 class="card-title">${
          "Categoria: " + product.category
        }</h6><span class="badge rounded-pill bg-dark">${
    "$ " + product.price + ",00"
  }</span></h5>
      </div>
    </div>
  </div>`;
}
//agrego el evento de cambio de estado del filtro
filter.addEventListener("change", () => {
  filterProd(filter.value);
});
//funcion para filtrar los productos
function filterProd(value) {
  if (value === "Todo") {
    productsCards.innerHTML = "";
    regProducts.forEach((product) => {
      createCard(product);
    });
  } else if (value === "A-Z") {
    productsCards.innerHTML = "";
    let newRegProd = regProducts.sort(SortArray);
    newRegProd.forEach((product) => {
      createCard(product);
    });

    regProducts =
      JSON.parse(localStorage.getItem("regProductsLocalStorage")) || [];
  } else if (value === "Z-A") {
    productsCards.innerHTML = "";
    let newRegProd = regProducts.sort(SortArrayZA);
    newRegProd.forEach((product) => {
      createCard(product);
    });

    regProducts =
      JSON.parse(localStorage.getItem("regProductsLocalStorage")) || [];
  } else {
    productsCards.innerHTML = "";
    let newRegProd = regProducts.filter((product) => {
      return product.category === value;
    });
    newRegProd.forEach((product) => {
      createCard(product);
    });
  }
}
//funcion para compara de A-Z segun la descripcion
function SortArray(x, y) {
  return x.description.localeCompare(y.description, "en", {
    sensitivity: "base",
  });
}
//funcion para compara de Z-A segun la descripcion
function SortArrayZA(x, y) {
  return y.description.localeCompare(x.description, "en", {
    sensitivity: "base",
  });
}
