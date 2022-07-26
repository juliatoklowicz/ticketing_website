function calcPrice(adults, children) {

    let price = adults*12 + children*6;
    return price;
}

function calcSum(adults, children) {

    let sum = adults + children;
    return sum;
}

window.onload = function() {
    let btn = document.getElementById("buyButton");

    btn.onclick = function() {
        let adults = document.getElementById("adults").value;
        let children = document.getElementById("children").value;

        if (adults < 0 || children < 0) {
            alert("You can't buy negative number of tickets!")
        } 

        else {
            let price = calcPrice(adults, children);
            let sum = calcSum(parseInt(adults), parseInt(children));
        
            alert("You just bought " + sum + " tickets. Full price: " + price + "$");
        }

    }
}