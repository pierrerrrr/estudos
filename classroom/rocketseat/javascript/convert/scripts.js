const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharacterRegex, "");
});

form.onsubmit = (e) => {
  e.preventDefault();

  const selectedCurrency = currency.value;

  console.log(selectedCurrency);
};
