// uma função que soma os numeros de uma array

function sumArray(array) {
  // recebe a array

  // cria variavel soma iniciada com 0
  let soma = 0;

  // passa por toda array
  for (let num of array) {
    // soma os números da array
    soma = soma + num;
  }

  // retorna o valor da soma dos números dentro da array
  return soma;
}

console.log(sumArray([1, 1, 1]));
