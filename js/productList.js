var products = JSON.parse(localStorage.getItem("products"));


if (products == null) {
  products = [
    {
      id: 1,
      title: "P20 Pro 128GB Dual SIM Twilight",
      img: "https://i.ibb.co/gR3Dhsg/P20.jpg",
      description:
        "A smartphone is a handheld personal computer with a mobile operating system and an integrated mobile broadband cellular network connection for voice, SMS, and Internet data communication; most if  not all smartphones also support Wi-Fi.",
      price: 167,
      stock: 200,
      manufactor: 'Huawei',
      category: 'phone'
    },

    {
      id: 2,
      title: "Iphone 8 Plus 64GB",
      img: "https://i.ibb.co/v4b9ZVT/ip83.png",
      description:
        "Theo truyền thống, tiếp sau chiếc iPhone 7 thì Apple sẽ cho ra mắt chiếc iPhone 7s nhưng năm nay táo khuyết đã tạo ra ngoại lệ khi giới thiệu đến người dùng chiếc iPhone 8 không có nhiều thay đổi về ngoại hình nhưng có sự cải tiến về hiệu năng",
      price: 339,
      stock: 300,
      manufactor: 'Apple',
      category: 'phone'
    },

    {
      id: 3,
      title: "IPhone 12 64GB",
      img: "https://i.ibb.co/F8hNyVW/ip12.jpg",
      description:
        "Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.",
      price: 895,
      stock: 150,
      manufactor: 'Apple',
      category: 'phone'
    },
    {
      id: 4,
      title: "Samsung Galaxy Z Fold3 5G 256GB",
      img: "https://i.ibb.co/crS1VRx/s-mungz.jpg",
      description:
        "Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng.",
      price: 1798,
      stock: 100,
      manufactor: 'Samsung',
      category: 'phone'
    },
  ];

  localStorage.setItem("products", JSON.stringify(products));
}



var container = document.querySelector(".container");

products.map((product) => {
  var divCard = document.createElement("div");

  divCard.className = "card";

  divCard.innerHTML += `<h3 class='card-title'>${product.title}</h3>`;
  divCard.innerHTML += `<img src='${product.img}' />`;
  divCard.innerHTML += `<p class='product-description'>${product.description}</p>`;
  divCard.innerHTML += `<p class='product-price'>${product.price} USD</p>`;
  divCard.innerHTML += `<p class='product-stock'>${product.stock} units in stock</p>`;
  divCard.innerHTML += `<span class='btn-control'>
                            <button class="btn btn-details">
                                 <i class="fa fa-info-circle" aria-hidden="true"></i> Details
                            </button>
                            <button class="btn btn-order">
                             <i class="fa fa-shopping-cart fa-flip-horizontal" aria-hidden="true" ></i> Order Now
                            </button>
                        </span>`;

  container.appendChild(divCard);
});


var btnDetails = document.querySelectorAll('.btn-details');

//để dùng map vs nodeList mình phải clone nodelist thành arr (dùng spread operator) rồi mới xài map dc

[...btnDetails].map((btnDetail,curIndex) => {
    btnDetail.onclick = (evt) => {
        sessionStorage.setItem('productId',products[curIndex].id);
        window.location = "/productDetail.html";
    }
});