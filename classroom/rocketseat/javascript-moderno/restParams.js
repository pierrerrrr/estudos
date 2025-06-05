// rest Params (...) permite representar um número indefinito de argumentos como um array

// deixa os parametros dinamicos
function values(a, ...rest) {
    console.log(a)
    console.log(...rest)
}

values(1, 3, 4, 6, 7)

function fullName(name, ...rest) {
    console.log(name)
    console.log(...rest)
}

fullName("Iago", "Pierre", "Storniolo")


// utilizando somente o ...rest na funçaõ
function getRest(...rest) {
    console.log(rest.length)
    console.log(...rest)
}

getRest("Fernanda", "Illida")

// n precisa ser chamado de ...rest sempre, comumente pode ser visto como ...args