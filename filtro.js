const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const listaDeProductos = document.getElementById("lista-de-productos");
const inputField = document.querySelector(".input");
const filterButton = document.querySelector("Button");

const displayProductos = (productos) => {
  listaDeProductos.innerHTML = ""; // Limpiar productos previos
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaDeProductos.appendChild(d);
  });
};

const filtrado = (productos, texto) => {
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto.toLowerCase()) ||
    item.color.toLowerCase().includes(texto.toLowerCase())
  );
};

filterButton.onclick = () => {
  const texto = inputField.value;
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

// Mostrar todos los productos inicialmente
displayProductos(productos);