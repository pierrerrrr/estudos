// setInterval executa uma função após um interválo de tempo especificado

let value = 10

const interval = setInterval(() => {
    console.log(value)
    value--

    if (value === 0) {
        console.log("Fim da contagem")

        // interrompe o intervalo de execuções.
        clearInterval(interval)
    }
}, 1000)