class Animal {
    constructor(name) {
        this.name = name;
    }

    makeNoise() {
        console.log("Algum som genérico do animal")
    }
}

// a classe Dog herda todas as caracteristicas da classe Animal
class Dog extends Animal {
    // da pra sobescrever também o método
    makeNoise() {
        console.log("AU AU AU")
    }
}

class Cat extends Animal {
    makeNoise() {
        console.log("MIAU")
    }
}

// isso aqui funciona mesmo com a classe Dog estando vazia pq ela herda as caracteristicas da classe Animal
const dog = new Dog()
dog.makeNoise()

const cat = new Cat()
cat.makeNoise()