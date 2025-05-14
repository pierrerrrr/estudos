// função que inverte a string

function inverStt(str) {
  // receba uma string
  // padroniza a string para lowercase
  str = str.toLowerCase();

  // transofmra em array, inverte os caracteres e junta de novo
  let revertedStr = str.split("").reverse().join("");

  // retorna a string invertida
  return revertedStr;
}

console.log(inverStt("Eu te amo, Fernanda"));
