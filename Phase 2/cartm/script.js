function openShoppingCart() {
    console.log("in shopping cart open");
    shoppingCartObject.style.display = "block";
}
function closeShoppingCart() {
    console.log("in shopping cart open");
    shoppingCartObject.style.display = "none";
}
function addToCart(item) {
    console.log(item);
    if (item == "iphone") {
        shoppingCart.iphone++;
        totalAmount += 1000;
        iphoneNums.innerHTML = shoppingCart.iphone.toString();
        iphoneCart.style.display = "flex";
    }
    if (item == "ipad") {
        shoppingCart.ipad++;
        totalAmount += 1500;
        ipadNums.innerHTML = shoppingCart.ipad.toString();
        ipadCart.style.display = "flex";
    }
    if (item == "imac") {
        shoppingCart.imac++;
        totalAmount += 3000;
        imacNums.innerHTML = shoppingCart.imac.toString();
        imacCart.style.display = "flex";
    }
    if (item == "watch") {
        shoppingCart.watch++;
        totalAmount += 500;
        watchNums.innerHTML = shoppingCart.watch.toString();
        watchCart.style.display = "flex";
    }
    numItems++;
    numberOfItemsObject.innerHTML = numItems.toString();
    totalAmountObject.innerHTML = "Amount total: $" + totalAmount.toString();
}
var shoppingCart = {
    "iphone": 0,
    "ipad": 0,
    "imac": 0,
    "watch": 0
};
var numItems = 0;
var totalAmount = 0;
var numberOfItemsObject = document.getElementById("numberOfItems");
var shoppingCartObject = document.getElementById("shoppingCart");
var totalAmountObject = document.getElementById("totalAmount");
var iphoneNums = document.getElementById("iphone-nums");
var ipadNums = document.getElementById("ipad-nums");
var imacNums = document.getElementById("imac-nums");
var watchNums = document.getElementById("watch-nums");
var iphoneCart = document.getElementById("iphone-cart");
var ipadCart = document.getElementById("ipad-cart");
var imacCart = document.getElementById("imac-cart");
var watchCart = document.getElementById("watch-cart");
