let date = new Date("2025-03-13T14:45:00");

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "short",
    })
);

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "medium",
    })
);

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "long",
    })
);

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "full",
    })
);


let amount = 12.5

console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
}));