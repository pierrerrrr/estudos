// desestructing assigment (desestruturação de array)
// permite extrair dados de uma array ou objeto em variáveis diferentes

const data = ["Iago Pierre", "pierrestorniolo@gmail.com"]

// desestruturando array

const [username, email] = data

console.log(username)

const fruits = ["banana", "apple", "orange"]

// desestruturando somente o primeiro item
const [fruit] = fruits
console.log(fruit)

// ignorando o primeiro item
const [_, apple] = fruits
console.log(apple)