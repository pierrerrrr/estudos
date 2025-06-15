// uma maneira de exportar tudo de uma vez só ( tudo que for "exportavél")
// import * as calc from "./calc.js"

// um exemplo de import default utilizando sum
import sum, { mult } from "./calc.js"

// exemplo de import utilizando classe
import { Calc } from "./calc.js"

// pra funcionar precisa instanciar a classe
const calc = new Calc()

console.log(calc.sum(1, 5))
console.log(calc.mult(2, 5))