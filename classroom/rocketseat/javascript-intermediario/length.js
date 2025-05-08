let num = 11987614121;

// num = num.toString();

// console.log(num.length)

if (String(num).length < 11) {
  console.log("Esse não é um telefone válido.");
} else if (String(num).length > 11) {
  console.log("Esse não é um telefone válido.");
} else {
  console.log("Telefone cadastrado.");
}
