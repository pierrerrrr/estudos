// função que ve quantas vezes um numero se repete numa array

function repeatNumber(array, numAlvo) {
  // recebe um numero e trnasforma a string em int
  numAlvo = Number(numAlvo);

  // inicia o contador
  let count = 0;

  // passa portoda a rray
  for (let num of array) {
    if (num === numAlvo) {
      count++;
    }
  }

  // retorna quantas vezes o numero alvo foi repetido na array
  return count;
}

console.log(repeatNumber([1, 2, 3, 3, 3, 3, 5], 3));
