// desestructing assigment (desestruturação de objeto)
// permite extrair dados de uma array ou objeto em variáveis diferentes

const product = {
    description: "teclado",
    price: 150
}

const { description, price } = product

console.log(description)
console.log(price)

// desestruração em uma função
function newProduct({ description, price }) {
    console.log("### NOVO PRODUTO ###")
    console.log("Nome:", description)
    console.log("Preço: R$", price)
}

// assim eu consigo usar eles indepente da ordem que é passado ali nos parametros da função

newProduct({
    description: "Teclado",
    price: 150
})