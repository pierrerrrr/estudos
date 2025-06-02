class Product {
    constructor(name) {
        // repassa as propriedades para o objeto
        this.name = name;
    }
}

const product1 = new Product("chinelo")
console.log(product1.name)

const product2 = new Product("sandália")
console.log(product2.name)