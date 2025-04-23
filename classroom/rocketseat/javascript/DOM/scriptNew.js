const ul = document.querySelector("ul");

ul.addEventListener("scroll", (event) => {
  if (ul.scrollTop >= 382) {
    console.log("FIM DA LISTA");

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("CLICOU")
})


function notReloadThePage() {
  const button = document.querySelector("button");

  button.addEventListener("click", (event) => {
    event.preventDefault();
  })
}