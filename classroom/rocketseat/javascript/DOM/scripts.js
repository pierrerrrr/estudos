// setando estilos
const guest = document.querySelector("#guest-1");
const input = document.querySelector("#name");
input.classList.add("input-error");
input.classList.remove("input-error");

// no caso do toogle se o elemento não tiver a tag, ele adiciona, caso tenha ele remove.
// input.classList.toggle("input-error")

const button = document.querySelector("button");
button.style.backgroundColor = "red";

// setando atributos
button.setAttribute("disabled", true);


// criando elementos
const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");
const guestName = document.createElement("span");

guestName.textContent = "Pierre";

newGuest.append(guestName);
console.log(newGuest.textContent);

guests.prepend(newGuest);
