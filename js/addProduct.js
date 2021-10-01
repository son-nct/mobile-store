var btnLogout = document.getElementById("logout");

btnLogout.onclick = function (evt) {
  window.location = "/productList.html";
};

var btnAdd = document.querySelector(".btn-add-product");

btnAdd.disabled = true;

var imgPath = "";

if (
  name.length > 0 &&
  price.length > 0 &&
  stock.length > 0 &&
  description.length > 0 &&
  descmanufactorription.length > 0 &&
  category
) {
  btnAdd.disabled = false;
}

function fileChange() {
  document.querySelector(".loading-container").classList.remove("hidden");

  var file = document.getElementById("file");
  var form = new FormData();
  form.append("image", file.files[0]);

  btnAdd.disabled = true;

  var settings = {
    url: "https://api.imgbb.com/1/upload?key=3ce508644197fb15dcf4e916cf328c21",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
  };

  $.ajax(settings).done(function (response) {
    var jx = JSON.parse(response);
    imgPath = jx.data.url;
    document.querySelector(".loading-container").classList.add("hidden");
    btnAdd.disabled = false;
  });
}

var products = JSON.parse(localStorage.getItem("products"));

btnAdd.onclick = function (evt) {
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var stock = document.getElementById("stock").value;
  var description = document.getElementById("description").value;
  var manufactor = document.getElementById("manufactor").value;
  var category = document.getElementById("category").value;
  var condition = document.querySelector(
    'input[name="condition"]:checked'
  ).value;

  var newId = products[products.length - 1].id + 1;

  var newProduct = {
    id: newId,
    title: name,
    img: imgPath,
    description: description,
    price: price,
    stock: stock,
    manufactor: manufactor,
    category: category,
  };

  products.push(newProduct);

  localStorage.setItem("products", JSON.stringify(products));

  swal({
    title: "Added Product Success!",
    icon: "success",
    button: "OK",
  });
};
