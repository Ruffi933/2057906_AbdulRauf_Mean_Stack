function openShoppingCart() {
    console.log("in shopping cart open");
    shoppingCartObject.style.display = "block";
}

function closeShoppingCart() {
    console.log("in shopping cart open");
    shoppingCartObject.style.display = "none";
}


function addToCart(item){
    console.log(item);
    if(item == "iphone"){
        shoppingCart.iphone++;
        totalAmount += 1000;
        iphoneNums.innerHTML = shoppingCart.iphone.toString();
        iphoneCart.style.display = "flex";
    }
    if(item == "ipad"){
        shoppingCart.ipad++;
        totalAmount += 1500;
        ipadNums.innerHTML = shoppingCart.ipad.toString();
        ipadCart.style.display = "flex";
    }
    if(item == "imac"){
        shoppingCart.imac++;
        totalAmount += 3000;
        imacNums.innerHTML = shoppingCart.imac.toString();
        imacCart.style.display = "flex";
    }
    if(item == "watch"){
        shoppingCart.watch++;
        totalAmount += 500;
        watchNums.innerHTML = shoppingCart.watch.toString();
        watchCart.style.display = "flex";
    }
    numItems++;
    numberOfItemsObject.innerHTML = numItems.toString();
    totalAmountObject.innerHTML = "Amount total: $" + totalAmount.toString();
}
  
let shoppingCart = {
    "iphone": 0,
    "ipad": 0,
    "imac": 0,
    "watch": 0
};
let numItems = 0;
let totalAmount = 0;
let numberOfItemsObject = document.getElementById("numberOfItems");
let shoppingCartObject = document.getElementById("shoppingCart");
let totalAmountObject = document.getElementById("totalAmount");

let iphoneNums = document.getElementById("iphone-nums");
let ipadNums = document.getElementById("ipad-nums");
let imacNums = document.getElementById("imac-nums");
let watchNums = document.getElementById("watch-nums");

let iphoneCart = document.getElementById("iphone-cart");
let ipadCart = document.getElementById("ipad-cart");
let imacCart= document.getElementById("imac-cart");
let watchCart= document.getElementById("watch-cart");
