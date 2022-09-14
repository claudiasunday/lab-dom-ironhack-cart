// ITERATION 1

function updateSubtotal(product) {
  // js/index.js
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  console.log('this is my price dom', price);
  // console.log(quantity.value);
  // console.log(price.innerHTML);
  // const subtotal = price.innerHTML * quantity.value;

  const quantityValue = quantity.value;
  const pricenNumber = price.innerHTML;

  const subtotal = quantityValue * price.innerHTML;
  // console.log(subtotal);

  const subtotalDOM = product.querySelector('.subtotal span');
  // console.log(subtotalDOM);

  // const subtotalDomValue = subtotalDOM.innerHTML;
  // console.log(subtotalDomValue);

  subtotalDOM.innerHTML = subtotal;

  //... your code goes here
}

function calculateAll(product) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelector('.product');
  //allProducts.forEach(myFunction); ---->>> NNO POT SER PQ NO ES UN ARRAY
  //   for (let i = 0; product.length, i++)
  //     updateSubtotal(products[i]);
  // }
  //   console.log(allProducts)

  // const allproducts = document.getElementsByClassName('product');
  // for (let i = 0; i < allproducts.length; i++) {
  //   updateSubtotal(allproducts[i]);
  // }

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
