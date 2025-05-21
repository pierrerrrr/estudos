// sintaxe while (loop ou repetição)

let execute = true;

while (execute === ture) {
  let response = window.prompt("Deseja continuar: 1 (sim) ou 2 (não) ");

  if (response == 2) {
    execute = false;
  }
}

// o código só vai cehgar nessa parte se em algum momento a resposta do prompt for 2
console.log("vamos seugir com o fluxo");
