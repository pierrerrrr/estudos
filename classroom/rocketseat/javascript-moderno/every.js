// o método every() testa se todos os elementos do array passam na condição e retorna um valor boolean

// exemplo com objetos
const persons = [
    { name: "Iago", age: 23 },
    { name: "Fernanda", age: 24 },
    { name: "Mateus", age: 24 },
]

const result = persons.every((person) => person.age >= 20)
console.log(result)