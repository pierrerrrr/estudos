num = 11;

resto = num % 2;

// console.log(num); condição ternária
// console.log(resto !== 0 ? "Esse número é impar!" : "Esse número é par!");

console.log(num); // if (SE)
if (resto === 0) {
  console.log("Esse número par!");
} else {
  // else (SE NÃO)
  console.log("Esse número é impar!");
}



// outro forma de fazer utilizando função

function isEven(num) {
  return num % 2 === 0 ? "Esse número é par!" : "Esse número é impar";
}

console.log(isEven(11));
