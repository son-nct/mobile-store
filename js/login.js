

var btnLogin = document.getElementById('btnLogin');



btnLogin.onclick = (evt) => {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var error_message = document.querySelector('.error-message');

    if(username.value === "admin"  && password.value === "admin") {

        error_message.classList.add('hidden');
        window.location = "/addProduct.html";
    }else {
        username.value = "";
        password.value = "";
        error_message.classList.remove('hidden');
    }

}


