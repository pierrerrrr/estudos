// uma função que identifica se existe um determinado numero dentro da array

function findNum(array, numAlvo) {
  // essa maneira não é a melhor a ser feita
  //   // receba a array
  //   array = array;
  //   // percorre a array
  //   for (let num of array) {
  //     if (numAlvo == num) {
  //       return true;
  //     }
  //   }

  // vou utilizar includes() agora
  return array.includes(numAlvo);
}

console.log(findNum([1, 2, 3], 3));
