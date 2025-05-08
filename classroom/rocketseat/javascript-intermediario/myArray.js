// tipos aceitos em uma array
const myArray = [
  "hello", // string
  10, // number
  true, // boolean
  function () {
    console.log("Aceita função também.");
  },
  {
    // aceita objeto também
    name: "Iago",
    email: "pierrestorniolo@gmail.com",
  },
];

console.log(myArray[2])

// como executar a função dentro da array
myArray[3]()

// acessando um objeto dentro da array
console.log(myArray[4].email)