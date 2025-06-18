// estudando promises

// função que retorna uma promise

let isBoolean = false

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

/*
// uma maneira de tratar promises
asyncFunction().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("fim da execução!")
})
*/

// colocar o async na frente deixa claro que vamos lidar com promises nessa função.
async function fetch() {
    // bloco de trycatch pra tratar exceções.
    try {
        const response = await asyncFunction()
        console.log(response)
    } catch (error) {
        console.log("Alguma coisa deu errado:", error)
    } finally {
        console.log("fim da operação!")
    }
}

fetch()

/*
utilizando arrow function
const fetch = async () => {
    const response = await asyncFunction()
    console.log(response)
}
*/