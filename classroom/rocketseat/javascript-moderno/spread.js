// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos

const numbers = [1, 2, 3]
console.log(numbers)

// spread
console.log(...numbers)

// com objetos
const data = [
    {
        name: "Iago",
        email: "iagopierre@gmail.com",
        icon: "i.png"
    },
    {
        name: "Fernadna",
        email: "fefeillidia@gmail.com",
        icon: "f.png"
    },
]

console.log(...data)