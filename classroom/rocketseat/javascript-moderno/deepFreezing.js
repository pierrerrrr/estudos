// deep freezing

const shoe = {
    title: "abzorb 2000",
    size: 9.5,
    owner: {
        name: "New Balance",
        country: "US"
    }
}

function deepFreeze(obj) {
    // obtem um array com todas as propriedades do obj
    const props = Reflect.ownKeys(obj)

    // itera sobra todas as propriedades do obj
    for (const prop of props) {
        // obtem o valor associado a propriedade atual
        const value = obj[prop]

        // aqui primeiro ve se tem valor e se o tipo é obj OU se o valor é uma função.
        if (value && typeof value === "object" || typeof value === "function") {
            deepFreeze(value)
        }
    }

    // retorna o objeto congelado
    return Object.freeze(obj)
}

// aqui chama a função pra congelar o objeto com Deep Freeze.
deepFreeze(shoe)

// não muda por causa da função
shoe.title = "air max 90"
shoe.owner.name = "Nike"

console.log(shoe)