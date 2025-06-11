/*
o método reduce é utilizado para reduzir a array a um unico valor

parametros
    array original (values)
    acumulador (accumulator)
    valor da iteração (currentValue)
    valor inicial (0)
    index (index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log(accumulator)
    console.log(currentValue)
    console.log(index)

    console.log(accumulator + currentValue)
    console.log("#######")

    return accumulator + currentValue
}, 0)