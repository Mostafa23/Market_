var allProducts = document.querySelectorAll(".card");

var listItem = document.querySelector("#list_Item");

var btn = document.querySelector("#btn_show_price");

var totalPrice = 0;
var numberOfItem = 0;

var isT = false;

allProducts.forEach(function (item) { 
    item.querySelector(".btn-add").onclick = function () {
        if(isT){
            listItem.innerHTML = "";
            totalPrice = 0;
            numberOfItem = 0;

            isT = !isT;
        }

        var price = parseFloat(item.querySelector("#item_price").textContent);
        var title = item.querySelector(".card-title").textContent;

        totalPrice += price;
        numberOfItem++;

        listItem.innerHTML += `<tr><td>${numberOfItem}</td><td>${title}</td><td>${price}</td></tr>`;

        if (listItem.innerHTML !== "") {
            btn.style.display = "block";
        }
    }
});

btn.onclick = function () {
    if(!isT){
        listItem.innerHTML += `<tr><td></td><td>Total Price:</td><td>${totalPrice}$</td></tr>`;
        isT = !isT;
    }
}

