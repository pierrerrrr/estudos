// operador lógico que retorna o seu operando do lado direito quando seu operador do lado esquerdo é undefined ou null. Caso contrário, ele retorna o operador do lado esquerdo.

let content;

console.log(content ?? "Operação padrão");
// top demais

// exemplo com objeto
const user = {
  name: "Pierre",
  avatar: undefined,
};

console.log(user.avatar ?? "default.png");
