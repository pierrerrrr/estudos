// fazer uma função que informe quantas vogais tem em um texto passado pelo user
function countVowels(text) {
  let count = 0;

  text = text.toLowerCase();

  const vogals = "aeiou";

  for (let letra of text) {
    if (vogals.includes(letra)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Fernanda"));
