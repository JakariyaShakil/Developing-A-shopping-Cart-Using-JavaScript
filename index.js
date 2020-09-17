var shoppingCart = [];
var allProducts = JSON.parse(localStorage.getItem("shoppingcart"));
var cartcount = 0;
const cartCount = document.getElementById("cart-count");
cartCount.textContent = cartcount;
if(allProducts.length != 0){
    shoppingCart = allProducts;
    cartcount = allProducts.length;
}
function addToCart(elem){    
    var product = {
        "productName": elem.parentNode.childNodes[1].innerText,
        "productPrice": elem.parentNode.childNodes[5].dataset.price
    }    
    shoppingCart.push(product);    
    localStorage.setItem("shoppingcart", JSON.stringify(shoppingCart));
    var cart = localStorage.getItem("shoppingcart");
    console.log(cart);
    cartcount++;
    cartCount.textContent = cartcount;
}

