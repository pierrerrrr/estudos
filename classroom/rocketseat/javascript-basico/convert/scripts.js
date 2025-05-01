const USD = 5.8;
const EUR = 6.7;
const GBP = 7.1;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharacterRegex, "");
});

form.onsubmit = (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;
    const total = amount * price;
    result.textContent = formatCurrencyBRL(total);
    footer.classList.add("show-result");
  } catch (e) {
    footer.classList.remove("show-result");

    console.log(e);
    alert("tente de novo");
  }
}

function formatCurrencyBRL(value) {
  // converte string para numero para usar o toLocaleString
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
