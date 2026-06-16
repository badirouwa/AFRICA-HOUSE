let cart = [];
let total = 0;

function addtoCart(name, price){
    cart.push({
        name: name,
        price: price,
    });

    console.log(cart);
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    total = 0; 

    for(let i = 0; i < cart.length; i++) {
        total += cart[i].price;

         cartList.innerHTML += `
        <li>
            ${cart[i].name} - $${cart[i].price}
            <button onclick="removeItem(${i})">
                Remove
            </button>
        </li>
        `;
    }

    document.getElementById("total").textContent = total;
}

function removeItem(index){
    cart.splice(index, 1);
    displayCart();
}

function clearCart(){
    cart = [];
    total = 0;
    displayCart();
}
