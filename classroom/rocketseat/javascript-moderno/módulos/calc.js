// a função padrão fornecida pelo módulo
export default function sum(a, b) {
    return a + b
}

// essa aqui é uma função named export -  cada módulo é importado pelo seu próprio nome de exportação
export function mult(a, b) {
    return a * b
}

// também da pra importar Classes
export class Calc {
    sum(a, b) {
        return a + b
    }

    mult(a, b) {
        return a * b
    }
}

// da pra fazer o export de todas juntos no final do código
// export { sum, mult, Calc}