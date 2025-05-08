let creditCard = "1234567812344928";

const lastDigits = creditCard.slice(-4);

const maskedNumber = lastDigits.padStart(creditCard.length, "X")
console.log(maskedNumber)
