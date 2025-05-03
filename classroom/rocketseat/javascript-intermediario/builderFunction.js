function createProduct(name) {
  const product = {};

  product.name = name;
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  };

  return product;
}

// o new cria um novo objeto utilizando a mesma estrutura do construtor ou da função construtora.
const product1 = new createProduct("Teclado");
console.log(product1.name);
product1.details();



// outra maneira de fazer a função construtora
function Person(name) {
  this.name = name;
  this.message = function () {
    console.log("Olá, mundo!");
  };
}

const person1 = new Person("Pierre");
console.log(person1.name);
