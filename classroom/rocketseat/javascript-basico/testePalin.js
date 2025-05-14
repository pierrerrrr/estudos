// função para identificar se uma pavavra é palindromo ou não

function palin(str) {
  // transforma a string em lowercase pra padronizar
  str = str.toLowerCase();

  // inverter a palavra
  let reversed = str.split("").reverse().join("");

  // comparar com a palavra original
  if (reversed === str) {
    console.log("é um palindromo");
  } else {
    console.log("não é um palindromo");
  }
}

palin("radar");
