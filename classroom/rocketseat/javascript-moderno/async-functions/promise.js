// estudando promises

// função que retorna uma promise

let isBoolean = true

function asyncFunction() {
    return new Promise((resolve, reject) => {
        // estou utilizando o setTimeout apenas para simular um delay, de por exemplo, uma requisição ao banco de dados.
        setTimeout(() => {
            // simula uma operação assíncrona
            const isSuccess = isBoolean

            if (isSuccess) {
                resolve("a operação deu certo.")
            } else {
                reject("algo deu errado.")
            }
        }, 2000)
    })
}

// vendo que é uma promise
// console.log(asyncFunction())

asyncFunction().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("fim da execução!")
})