// moto estrito: erros que eram silenciosos passam a não ser.

// também pode ser aplicado no escopo global do código
"use strict"

function showMessage() {
    // pode ser aplicado dentro do escopo da função
    // "use strict"

    let personName = "Pierre"

    console.log("Olá!", personName)
}

showMessage();

class Student {
    get point() {
        return 7
    }
}

let student = new Student()

student.point = 10;