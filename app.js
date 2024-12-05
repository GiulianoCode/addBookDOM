const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const addButton = document.getElementById("add")
const cardsBox = document.querySelector(".cardsBox");

const crearLibro = () => {
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    year.value.trim() === ""
  ) {
    alert("No puede dejar ningun espacio en blanco");
  } else {
    let bookCard = document.createElement("div");
    bookCard.className = "bookCard";
    bookCard.innerHTML = `
      <div class="imgWrapper">
        img
      </div>
      <article>
        <h3>${title.value}</h3>
        <p>Autor: ${author.value}</p>
        <p>Año: ${year.value}</p>
      </article>
    `;
    cardsBox.appendChild(bookCard);
  }
  title.value = "";
  author.value = "";
  year.value = "";
};

addButton.addEventListener("click", () => {
  crearLibro()
})
