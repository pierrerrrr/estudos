// o método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, undefined é retornado

const values = [8, 45, 89, 123, 600]

// retorna o primeiro valor maior que a condição que foi passada
const found = values.find((value) => value > 10)
console.log(found)

// exemplos com objetos
const fruits = [
    { name: "apple", quantity: 23 },
    { name: "watermellon", quantity: 25 },
    { name: "orange", quantity: 52 },
]

const result = fruits.find((fruit) => fruit.name === "orange")
console.log(result)