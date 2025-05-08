// construtor de array -  n sei em que cenário usar isso...
const newArray = new Array();

// [] <= array
// {} <= object


// array utilizando []
let fruits = ["banana", "morango", "melancia", "melão"];

console.log(fruits[0]);

// pegando dinamicamente sempre o ultimo item da lista
console.log(fruits[fruits.length - 1]);

// econtra e retorna o indice do elemento no array
let position = fruits.indexOf("banana")
console.log(position)

// if (position == -1) {
//     console.log("Essa fruta não está na lista.")
// } else {
//     console.log("Essa fruta está na lista.")
// }

// removendo indices da lista a partir de um indice X
fruits.splice(1, 2)
console.log(fruits)

// verifica se existe um item na array
console.log(fruits.includes("ovo"))