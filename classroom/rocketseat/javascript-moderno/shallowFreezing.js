// shallow freezing

const shoe = {
    title: "abzorb 2000",
    size: 9.5,
    owner: {
        name: "New Balance",
        country: "US"
    }
}

// o javascript em si não impoe restrições a modificações dos objetos.
// shoe.size = "11"

// como congelar o objeto e impedir a modificação
Object.freeze(shoe)

// aqui ele não modifica
shoe.title = "nike 12 molas"

// como é um shallow freeze (um congelamento raso) ele não impede as modificações em objetos aninhados - aqui já modifica.
shoe.owner.country = "BR"

console.log(shoe)