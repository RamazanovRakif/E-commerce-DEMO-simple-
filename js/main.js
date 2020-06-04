// let carts = document.querySelectorAll(".add-to-cart");

// // let products = [
// //   {
// //     name: "Title 1",
// //     image: "grey",
// //     price: 55,
// //     inCart: 0,
// //   },
// //   {
// //     name: "Title 2",
// //     image: "blue",
// //     price: 45,
// //     inCart: 0,
// //   },
// //   {
// //     name: "Title 3",
// //     image: "green",
// //     price: 35,
// //     inCart: 0,
// //   },
// //   {
// //     name: "Title 4",
// //     image: "black",
// //     price: 25,
// //     inCart: 0,
// //   },
// // ];
// let products =[
//     {
//         categoryId:1,
//         categoryName:"Mobil Telefonlar",
//         id:1,
//         name:"Xiaomi Redmi-64GB",
//         price:520,
//         discount:30,
//         situation:"Yeni",
//         image:"img/redmi-not-8t.jpg"
//     },
//     {
//         categoryId:1,
//         categoryName:"Mobil Telefonlar",
//         id:2,
//         name:"Xiaomi Redmi-64GB",
//         price:520,
//         discount:30,
//         situation:"Yeni",
//         image:"img/redmi-not-8t.jpg"
//     },
//     {
//         categoryId:1,
//         categoryName:"Mobil Telefonlar",
//         id:3,
//         name:"Xiaomi Redmi-64GB",
//         price:300,
//         discount:30,
//         situation:"Yeni",
//         image:"img/redmi-not-8t.jpg"
//     },
//     {
//         categoryId:1,
//         categoryName:"Mobil Telefonlar",
//         id:4,
//         name:"Xiaomi Redmi-64GB",
//         price:400,
//         discount:30,
//         situation:"Yeni",
//         image:"img/redmi-not-8t.jpg"
//     },
//     {
//         categoryId:1,
//         categoryName:"Mobil Telefonlar",
//         id:5,
//         name:"Xiaomi Redmi-64GB",
//         price:500,
//         discount:30,
//         situation:"Yeni",
//         image:"img/redmi-not-8t.jpg"
//     },
//     {
//         categoryId:1,
//         categoryName:"Mobil Telefonlar",
//         id:6,
//         name:"Xiaomi Redmi-64GB",
//         price:600,
//         discount:30,
//         situation:"Yeni",
//         image:"img/redmi-not-8t.jpg"
//     },
   

// ]

// for (let i = 0; i < carts.length; i++) {
//   carts[i].addEventListener("click", (e) => {
//     cartNumbers(products[i]);
//     totalPrice(products[i]);

//     e.preventDefault();
//   });
// }

// function onLoadCartNumbers() {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   if (productNumbers) {
//     document.querySelector(".basket sup").textContent = productNumbers;
//   }
// }

// function cartNumbers(product) {
//   let productNumbers = localStorage.getItem("cartNumbers");
//   productNumbers = parseInt(productNumbers);
//   if (productNumbers) {
//     localStorage.setItem("cartNumbers", productNumbers + 1);
//     document.querySelector(".basket sup").textContent = productNumbers + 1;
//   } else {
//     localStorage.setItem("cartNumbers", 1);
//     document.querySelector(".basket sup").textContent = 1;
//   }

//   setItems(product);
// }

// function setItems(product) {
//   let cartItems = localStorage.getItem("productsInCart");

//   cartItems = JSON.parse(cartItems);
//   if (cartItems != null) {
//     if (cartItems[product.image] == undefined) {
//       cartItems = {
//         ...cartItems,
//         [product.image]: product,
//       };
//     }
//     cartItems[product.image].inCart += 1;
//   } else {
//     product.inCart = 1;
//     cartItems = {
//       [product.image]: product,
//     };
//   }

//   localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }
// function totalPrice(product) {
//   let cartPrice = localStorage.getItem("totalPrice");
//   console.log("My cartPrice is", cartPrice);

//   if (cartPrice != null) {
//     cartPrice = parseInt(cartPrice);

//     localStorage.setItem("totalPrice", cartPrice + product.price);
//   } else {
//     localStorage.setItem("totalPrice", product.price);
//   }
// }

// function displayCart(e) {
//   let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);
//   let cartPrice = localStorage.getItem("totalPrice");

//   let modalContainer = document.querySelector("#productList");
//   let totalPrice = document.querySelector("#totalPrice");
//   if (cartItems && modalContainer) {
//     modalContainer.innerHTML = "";
//     totalPrice.innerHTML = "";
//     Object.values(cartItems).map((item) => {
//       modalContainer.innerHTML += `
     
      
//      <tr>
//                 <td class="w-25">
//                   <img src="./img/${item.image}.jpg"
//                     class="img-fluid img-thumbnail" alt="Sheep">
//                 </td>
//                 <td id="card-title">${item.name}</td>
//                 <td id="card-price">${item.price}</td>
//                 <td class="qty"><input type="text" class="form-control" id="input1" value=${
//                   item.inCart
//                 }></td>
//                 <td id="card-amount">${item.inCart * item.price}</td>
//                 <td>
//                   <a href="#" class="btn btn-danger btn-sm">
//                     <i class="fa fa-times"></i>
//                   </a>
//                 </td>
//               </tr>
              
//      `;
//     });
//     totalPrice.innerHTML += `
  
//         <h5>Cəm: <span class="price text-success">${cartPrice}</span></h5>
     
//  `;
//   }
// }

// onLoadCartNumbers();
// displayCart();


// Login Register
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});