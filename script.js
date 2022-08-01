let cart = [];

function AddToCart(name, price){
    let item={
        Name: name,
        Price: price,
    }
    cart.push(item);
    console.log('Added to cart: ', item.Name)
}


function DisplayReceipt(){
    let total = 0;
    cartBody = document.getElementById("cartBody")
    cart.forEach((element) => {
        console.log(element.Name, element.Price);
        total += element.Price;
        let newRow = cartBody.insertRow();
        let newCell = newRow.insertCell();
        let nameText = document.createTextNode(element.Name);
        newCell.appendChild(nameText)
        newCell = newRow.insertCell();
        let priceText = document.createTextNode(element.Price);
        newCell.appendChild(priceText)        
    });
    console.log('Total is: ', total);
    
    newRow = cartBody.insertRow();
    newCell = newRow.insertCell();
    let totalText = document.createTextNode("Total");
    newCell.appendChild(totalText);
    newCell = newRow.insertCell();
    totalText = document.createTextNode(total);

    newCell.appendChild(totalText);
    cart.length = 0;
}