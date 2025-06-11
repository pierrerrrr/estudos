// imutabilidade

const address1 = {
    street: "Rua Eugenio Bosser",
    number: 14,
}

// isso não é uma cópia. é uma referencia
// const address2 = address1
// address2.number = 43
// no caso acima tem um "problema", pq vc acaba alterando nos dois elementos, para resolver isso podemos user o spread({...})

// aqui estaamos criando um novo objeto utilizando as propriedades e valores de addres1 (diferente da situaçaõ de cima que fizemos apenas uma referencia)
const address2 = {...address1}
console.log(address2)

// exemplo com array

const list1 = ["teclado", "mouse", "monitor"]

// aqui novamente estamos apenas usando o list1 como uma ereferencia, não estaamos criando um objeto novo.
// const list2 = list1

// basicamente a mesma coisa (agora entendi um cenário onde o spread pode ser usado)
const list2 = [...list1]

list2.push("cadeira gamer")

console.log(list1, list2)