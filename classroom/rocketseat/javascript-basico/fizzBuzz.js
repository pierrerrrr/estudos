// uma função que recebe um numero e retorna fizz se for divisivel por 3, buzz se for divisivel por 5 e caso n atenda nenhuma dessas retrone apenas o numero

function fizzBuzz(num) {
  // recebe o numero e transforma a string em num
  num = Number(num);

  // valida se é divisivel por 3 ou 5
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz");
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(num);
  }
}

fizzBuzz(15);
