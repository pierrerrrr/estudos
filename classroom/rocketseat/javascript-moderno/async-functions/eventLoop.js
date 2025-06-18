// entendendo as prioridades do event loop

// (1) ele executa o código de forma síncrona, sendo impressio imediatamente no console
console.log(1)

// (3) as microtasks são executadas antes de temporizadores e promises
queueMicrotask(() => {
    console.log(2)
})

// (5) aqui temos uma macrotask, por isso foi executada em ultimo lugar. ela aguarda o evento do temporizador ser acionado
setTimeout(() => {
    console.log(3)
}, 1000)

// (2) também executa de forma síncrona
console.log(4)

// (4) adiciona uma microtask quando a promise é resolvida
Promise.resolve(true).then(() => {
    console.log(5)
})