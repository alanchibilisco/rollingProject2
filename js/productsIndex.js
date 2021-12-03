let regProducts=JSON.parse(localStorage.getItem('regProductsLocalStorage')) || [];

regProducts.forEach(product => {

    createCard(product);
    
});

//primera muestra, hay q agregar los demas atributos
function createCard(product){
    let row=document.getElementById('row');
    row.innerHTML+="<p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p>"
}

//probar para ver si funciona
function chargeImage(){
    document.write("img/notfound.jpg")
}


// let row=document.getElementById('row');
// row.innerHTML="<p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p><p>pruebita</p>";