// função que recebe uma array de palavras e retorna um numero

function nameFilter(array, num) {
  let filtredArray = [];

  for (let name of array) {
    if (name.length >= num) {
      filtredArray.push(name);
    }
  }

  return filtredArray;
}

console.log(nameFilter(["Ana", "Fernando", "Lu", "Beatriz"], 5));

