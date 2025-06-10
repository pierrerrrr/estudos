// o metodo filter() cria um novo array com todos os elementos que passaram na condição

// exemplos do método filter()

const words = ["Javascript", "HTML", "CSS", "Web"]

const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
    { name: "Teclado", price: 150, promotion: true },
    { name: "Mouse", price: 50, promotion: false },
    { name: "Monitor", price: 1500, promotion: true },
]

const promotion = products.filter((product) => product.promotion === true);
console.log(promotion)