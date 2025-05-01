// tratamento de exceções usando try / catch / finally

/* 

try {
  // aqui a gente tenta executar alog
  console.log(result);
} catch (e) {
  // aqui a gente captura o erro para tratar

  // console.log(e) assim vc mostra literalmente o erro
  console.log("Mensagem de erro.") // assim vc pode auxiliar o usuário informando o que deu errado ou o que foi feito errado
} finally {
    // aqui ele executa independente se tem erro ou não
    console.log("fim")
}

*/

let result = 0;

try {
  if (result === 0) {
    throw new Error("o valor é igual a zero.");
  }
} catch (e) {
  console.log(e);
} finally {
  console.log(result, "fim");
}
