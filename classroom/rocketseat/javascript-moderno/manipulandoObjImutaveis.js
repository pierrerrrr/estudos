// manipulando objetos imutáveis
const shoe = {
    title: "abzorb 2000",
    size: 9.5,
    owner: {
        name: "New Balance",
        country: "US"
    }
}

const updatedShoe = {
    // utilizando spread
    ...shoe,
    title: "abzorb 2010",
    size: 10,
    DS: true,
}

// original sem modificação
console.log(shoe)

// modificado
console.log(updatedShoe)

// utilizando desestruturação para retirar alguma propriedade do objeto "original"
const { size, ...shoeWithoutSize } = shoe
console.log(shoeWithoutSize)