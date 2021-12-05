let regProducts=JSON.parse(localStorage.getItem('regProductsLocalStorage')) || [];

regProducts.forEach(product => {

    createCard(product);
    
});

//funcion para crear las cards de los productos almacenados en localStorage
function createCard(product){
    let productsCards=document.getElementById('productsCards');

    productsCards.innerHTML+=`<div class="col-sm-12 col-md-6 col-lg-6 my-2">
    <div class="card">
      <div class="card-body">
        <img src="${product.url}" alt="${"Imagen de "+product.description}" 
        onerror="this.src='img/image-not-found.png';" width=100%>
        <h5 class="card-title">${product.description+"-Modelo-"+product.model}</h5><span class="badge rounded-pill bg-primary">${'$ '+product.price+',00'}</span></h5>
      </div>
    </div>
  </div>`;
}
