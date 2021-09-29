var products = [
  {
    id: 1,
    title: "P20 Pro 128GB Dual SIM Twilight",
    img: "data:image/jpeg;base64,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",
    description:
      "A smartphone is a handheld personal computer with a mobile operating system and an integrated mobile broadband cellular network connection for voice, SMS, and Internet data communication; most if  not all smartphones also support Wi-Fi.",
    price: 167,
    stock: 200,
  },

  {
    id: 2,
    title: "Iphone 8 Plus 64GB",
    img: "data:image/jpeg;base64,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",
    description: "Theo truyền thống, tiếp sau chiếc iPhone 7 thì Apple sẽ cho ra mắt chiếc iPhone 7s nhưng năm nay táo khuyết đã tạo ra ngoại lệ khi giới thiệu đến người dùng chiếc iPhone 8 không có nhiều thay đổi về ngoại hình nhưng có sự cải tiến về hiệu năng",
    price: 339,
    stock: 300,
  },

  {
    id: 3,
    title: "IPhone 12 64GB",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVDneSnznTzAvQSNX-O8ydY7MIYTCS3dYwsRdq1mjZVL0-y39rMJ3T93a1co&usqp=CAc",
    description: "Trong những tháng cuối năm 2020, Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bứt phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.",
    price: 895,
    stock: 150,
  },
  {
    id: 4,
    title: "Samsung Galaxy Z Fold3 5G 256GB",
    img: "data:image/jpeg;base64,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",
    description: "Galaxy Z Fold3 5G, chiếc điện thoại được nâng cấp toàn diện về nhiều mặt, đặc biệt đây là điện thoại màn hình gập đầu tiên trên thế giới có camera ẩn (08/2021). Sản phẩm sẽ là một “cú hit” của Samsung góp phần mang đến những trải nghiệm mới cho người dùng.",
    price: 1798,
    stock: 100,
  },
];

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