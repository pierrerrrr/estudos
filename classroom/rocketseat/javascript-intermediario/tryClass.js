// tratando exceções com classes

let obj = [17];
let index = 300;

try {
  // apenas testando um error mais genérico
  if (!obj.includes(17)) {
    // o throw funciona como um return, quando bater aqui e for true ele vai mandar direto para o error encerrando o código.
    throw new Error("O número 17 não está disponível");
  }

  if (index > 99) {
    throw new RangeError(
      "o número está fora do intervalo. Escolha um numéro entre 0 e 99"
    );
  }

  // obj.execute();
} catch (error) {
  // tratando errors de forma mais especifica
  if (error instanceof TypeError) {
    console.log("método indisponível");
  } else if (error instanceof RangeError) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
