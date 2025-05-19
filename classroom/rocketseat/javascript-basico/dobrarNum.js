// criar uma função que dobra o número presente na array

function dobrarNum(array) {
  // recebe a array
  let arrayDobrada = [];

  // passa pela array
  for (let num of array) {
    let numDuplicado = num * 2;
    // push adiciona o valor dentro da array (adiciona ao final da array)
    arrayDobrada.push(numDuplicado);
  }

  return arrayDobrada;
}

console.log(dobrarNum([1, 2, 3]));
