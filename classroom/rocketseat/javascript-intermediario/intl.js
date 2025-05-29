// utilizando API INTL para receber informaçãoes da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

// exibe de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const date = new Date();

// exibe em minutos a diferença do fuso
console.log(date.getTimezoneOffset() / 60)

// exibe por horas a diferença do fuso
console.log(date.getTimezoneOffset() / 60)

