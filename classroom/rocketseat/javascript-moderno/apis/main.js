// consumindo a api do server-json
// fetch("http://localhost:3333/products/3").then((response) => response.json()).then((data) => {
//     console.log(data);
// })

// fazendo de outra forma utilizando async - await
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products");
    const data = await response.json();
    console.log(data);
}

// o primeiro aproach serve mais pra quando não quero criar uma função nova, ou em caso do uso de react, em um use effect

async function fecthProductByID(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`);
    const data = await response.json();
    console.log(data);
}


// fecthProducts();
// fecthProductByID(1);

// adicionando produtos utilizando metodo POST
const form = document.querySelector("form");
const productName = document.getElementById("name");
const productPrice = document.getElementById("price");

addEventListener("submit", async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })

    await fetchProducts();
})