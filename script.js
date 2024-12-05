const crearLibro = (title, author, year) => {
  title = title.trim();
  author = author.trim();
  if (title === "") {
    throw new Error("Titulo invalido, el espacio esta vacio");
  } else if (author === "") {
    throw new Error("Autor invalido, el espacio esta vacio");
  } else if (isNaN(year) || year < 1900 || year > 2024) {
    throw new Error("Año Invalido");
  } else {
    return { title: title, author: author, year: year };
  }
};

class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(title, author, year) {
    const libro = crearLibro(title, author, year);
    this.libros.push(libro);
    return libro;
  }

  obtenerLibros() {
    return this.libros;
  }

  buscarPorPalabra(palabra) {
    return this.libros.filter((libro) =>
      libro.title.toLowerCase().includes(palabra.toLowerCase())
    );
  }

  obtenerTitulos() {
    return this.libros.map((libro) =>
      libro.title.concat(` - Año (${libro.year})`)
    );
  }

  static mostrarCatalogo(libros) {
    console.log("\n===CATALOGO DE LA BIBLIOTECA===");
    console.log("===========================");
    libros.forEach((libro, i) => {
      console.log(`${i + 1}. ${libro.title}`);
      console.log(`   Autor: ${libro.author}`);
      console.log(`   Año: ${libro.year}`);
      console.log("---------------------------");
    });
    console.log(`Total de libros: ${libros.length}`);
    console.log("===========================\n");
  }
}

const miBiblioteca = new Biblioteca();
miBiblioteca.agregarLibro(
  "Harry Potter y La Piedra Filosofal",
  "J.K. Rowling",
  1997
);
miBiblioteca.agregarLibro(
  "Harry Potter y La Camara de los Secretos",
  "J.K. Rowling",
  1998
);
miBiblioteca.agregarLibro("1984", "George Orwell", 1949);
miBiblioteca.agregarLibro("The Great Gatsby", "F. Scott Fitzgerald", 1925);

let librosArr = miBiblioteca.obtenerLibros();
// console.log(librosArr);

// Buscar por palabra
const lista = miBiblioteca.buscarPorPalabra("Harry");
console.log(lista);

// Array de libros (NOMBRE - Año)
const titulos = miBiblioteca.obtenerTitulos();
console.log(titulos);

// Catalogo de Libros
Biblioteca.mostrarCatalogo(miBiblioteca.libros);
