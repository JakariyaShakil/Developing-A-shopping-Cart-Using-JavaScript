var allProducts = JSON.parse(localStorage.getItem("shoppingcart"));

const cartlistdiv = document.querySelector(".productlist");

addThings();

function addThings(){

    cartlistdiv.innerHTML = "";

    for (let i = 0; i < allProducts.length; i++) {    
        cartlistdiv.innerHTML += `           <div class="product">
                                                <div class="detailes">
                                                    <span>${allProducts[i].productName}</span>
                                                    <span>${allProducts[i].productPrice}</span>
                                                </div>
                                                <button data-num="${i}" onclick="removeProduct(this);">Remove</button>
                                            </div>
                                            <hr>`;
    }
    
}



function removeProduct(elem){    
    var theNum = parseInt(elem.dataset.num);
    var tempArray = [];
    for (let i = 0; i < allProducts.length; i++) {
        
        if(theNum != i){
            tempArray.push(allProducts[i]);
        }   
        
    }

    allProducts = tempArray;

    localStorage.setItem("shoppingcart",JSON.stringify(allProducts));
    addThings();

}

function goBack(){
    location.href = "./index.html";
}