// o metodo map() chama a função callback recebida por parametro para cada elemento da array original, em ordem, e constroi um novo array com base nos retornos de cada chamada. e no final, devolve um novo array

const products = ["Teclado", "Mouse", "Monitor"];

// percorrendo os items do array
products.map((product) => {
    console.log(product);
});

// utilizando o novo objeto retornado

const formmatted = products.map((product) => {
    // return product.toLowerCase();

    return {
        id: Math.random(),
        // fiz esse uuid só pra relembrar
        uuid: new Date().getTime(),
        description: product,
    }
});

console.log(formmatted);
