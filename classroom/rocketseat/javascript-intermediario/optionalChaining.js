const user = {
  id: 1,
  name: "Pierre",
  address: {
    street: "Rua Eugenio Bosser",
    city: "São Paulo",
    geo: {
      latitude: 47.494,
      longitude: 18.5675,
    },
  },
  message: () => {
    console.log(`Olá, ${user.name}!`);
  },
};

console.log(user.address)


// exemplo de opitional chaining. pq quando é colocado o ponto de interrogação ele tenta acessar ela, mas retorna undefined (em caso dela não existir) ao invés de estourar um erro. 

// isso serve em casos de objetos que podem ou não podem ter aquele "parametro", como uma foto de perfil, ou uma descrição do perfil.
console.log(user?.address?.street)
