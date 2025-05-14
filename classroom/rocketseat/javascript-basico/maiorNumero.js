// uma função que identifica qual é o maior numero de uma array

function maiorNumero(array) {
  // receba a array
  array = array;

  let maior = array[0];

  // "le" numero por numero (ou item por item dessa array)
  for (let num of array) {
    if (num > maior) {
      maior = num;
    }
  }

  // retorna para o usuário qual é o número maior
  return maior;
}

console.log(maiorNumero([1, 2, 3, 4, 70]));
