// objeto é uma coleção de dados e/ou funcionalidades
// podem ter propriedades e motodos

// criando um objeto vazio
const obj = {};

// criando objeto com propriedade e metodos

const user = {
  email: "pierrestorniolo@gmail.com",
  age: 23,
  // exemplo de propriedade composta
  name: {
    first_name: "Iago",
    middle_name: "PIerre",
    last_name: "Storniolo",
  },
  addres: {
    street: "Rua Eugenio Bosser",
    num: 14,
    cep: "03929080",
    city: "São Paulo",
  },
  message: () => {
    console.log("olá pierre");
  },
};

// acessando propriedades e metodos do objeto usando anotação de ponto
console.log(user.addres)

console.log(user.addres.street)

user.message();
