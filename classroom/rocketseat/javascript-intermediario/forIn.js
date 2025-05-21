// iteração é a qunatidad de vezes que essa repitção acontece

let person = {
  name: "Iago",
  sur_name: "Pierre",
  email: "pierrestorniolo@gmail.com",
};

for (let property in person) {
  // exibe o nome da proporeidade e n o conteúdo
  console.log(property);

  //   forma de pegar o valor da propriedade
  console.log(person[property]);
}

let studants = ["iago", "pierre", "fernanda"];

for (let index in studants) {
  console.log(studants[index]);
}

// for of só funciona em obejtos interaveis
