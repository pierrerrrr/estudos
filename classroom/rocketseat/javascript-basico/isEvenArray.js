// uma função que recebe uma rray com números e retorna outra array somente com os números pares da anterior

function filtrarPares(array) {
  // recebe a array
  array = array;

  // cria uma variavel que vai receber os números filtrados
  let arrayFiltrada = [];
  // passa por toda a array validando qual número é par
  for (let num of array) {
    // valida se o número é par
    if (num % 2 === 0) {
      // adiciona os números que são pares a arrayFiltrada
      arrayFiltrada.push(num);
    }
  }

  // retorna uma nova  array só com os números pares
  return arrayFiltrada;
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));
