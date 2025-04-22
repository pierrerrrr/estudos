option = 2;

switch (option) {
  case 1:
    console.log("NUMERO 1");
    break; // importante ter um break para interromper o switch, pq assim que ele encontra um case = true ele vai executar todo mundo depois que vem dele.
  case 2:
    console.log("NUMERO 2");
    break;
  case 3:
    console.log("NÚMERO 3");
    break;
  default:
    console.log("OPÇÃO INVÁLIDA");
}

// essa estrutura é muito utilizada quando vc quer executar e analisar passo a passo cada situação (ou caso)

/* 

Característica | if / else if / else | switch
Uso | Avalia expressões booleanas (condições) | Avalia valores específicos (comparação de igualdade)
Comparação | Pode usar qualquer operador (==, >, &&, etc.) | Usa somente igualdade estrita (===)
Flexibilidade | Muito flexível (condições complexas) | Ideal para múltiplas comparações de um único valor
Legibilidade | Pode ficar difícil de ler com muitas condições | Mais legível quando há muitos casos fixos
Performance | Sem grande diferença na maioria dos casos | Pode ser levemente mais performático em comparações diretas

usar um switch quando se tem um unico valor a ser comparado, e usar um if quando esse valor a ser comparado pode ser diferente, mais aberto

*/