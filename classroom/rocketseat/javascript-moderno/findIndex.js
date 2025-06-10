// esse método retorna o indice da array do primeiro elemento que retorna a condição. Caso contrário retorna -1, indicando que nenhum elemento passou no teste.

const values = [4, 6, 9, 15]

// exemplo que retorna 1 (pois ele para no primeiro elemento que retorna a condição - true)
console.log(values.findIndex((value) => value > 4))

// exemplo que retorna -1 (pois ele não encontra um elemento que responda a condição - false)
console.log(values.findIndex((value) => value > 15))