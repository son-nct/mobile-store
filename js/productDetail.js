var productId = parseInt(sessionStorage.getItem('productId'));


var products = JSON.parse(localStorage.getItem("products"));


var product = products.find((product) => {
    return product.id === productId;
})



var productName = document.querySelector('.product-name');
var description = document.querySelector('.product-description');
var manufactor = document.getElementById('manufactor');
var category = document.getElementById('category');
var stock = document.getElementById('stock');
var price = document.getElementById('price');
var itemCode = document.querySelector('.item-code');
var imgProduct = document.getElementById('imgProduct');


productName.innerText = product.title;
description.innerText = product.description;
itemCode.innerText = product.id;
manufactor.innerText = product.manufactor;
category.innerText = product.category;
stock.innerText = product.stock;
price.innerText = product.price + ' USD';
imgProduct.src = product.img;


var btnBack = document.querySelector('.btn-back');



btnBack.onclick = function(evt) {
    window.location = "productList.html";
}