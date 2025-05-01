const input = document.querySelector("input")

input.addEventListener("input", () => {
    const value = input.value

    const regex = /\D+/g

    // Retorna o padrão encontrado pela string
    // console.log(value.match(regex))

    // tesa se atende o valor encontrado
    // const isValid = regex.test(value)
    // console.log(isValid)
})