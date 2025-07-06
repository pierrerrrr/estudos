// consumindo a api do server-json
fetch("http://localhost:3333/products/3").then((response) => response.json()).then((data) => {
    console.log(data);
})