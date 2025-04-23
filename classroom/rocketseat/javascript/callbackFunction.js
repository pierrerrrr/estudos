// callback function - uma função passada para outra funçao como argumento

function execute(taskName, callback) {
  console.log("Executando tarefa:", taskName);

  callback();
}

function callback() {
  console.log("Tarefa finalizada.");
}

// utilizando função declarada
execute("Download do arquivo...", callback);

// utilizando arrow function
execute("Gerando documentação do código", () => {
  console.log("Callback utilizando arrow function");
});
