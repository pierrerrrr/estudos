// o método every() testa se pelo menos um dos elementos da array, se satisfazer a condição ele retorna um boolean
// exemplo com objetos
const persons = [
    { name: "Iago", age: 14 },
    { name: "Fernanda", age: 24 },
    { name: "Mateus", age: 13 },
]

const result = persons.some((person) => person.age >= 20)
console.log(result)