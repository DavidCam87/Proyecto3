//importamos la funcion que nos pinta todas las imagenes
import { renderImages } from "./src/components/renderImages/main.js";

// claves de acceso y endpoint de la API
const accessKey = 'su7WLYZ89iidd5UZQxOCSGTjj9xuYwuU0JuZ6lbPY4E';
const endPoint = 'https://api.unsplash.com/search/photos';
let query = '';

// elementos que necesitaremos para la funcionalidad
const inputElement = document.querySelector('.input');
const searchBtn = document.querySelector('#searchBtn');
const clearBtn = document.querySelector('.clearBtn');

async function getImages(query) {
  try {
    const res = await fetch(`${endPoint}?query=${query}&client_id=${accessKey}&per_page=20`);
    const data = await res.json();
    console.log(res);
    console.log(data);
    console.log(data.results);
    renderImages(data.results);
  } catch (error) {
    console.error('Error al obtener imágenes:', error);
  }
}

//llamamos a nuestro componente para pintar las imagenes
renderImages([]);

//pintamos las imagenes obtenidas de la API
getImages();

// evento que limpia el campo de texto
clearBtn.addEventListener('click', () => {
  inputElement.value = '';
  getImages();
});

//evento que recoge el valor de la entrada en el campo de texto
function handleInput() {
  query = inputElement.value;
  getImages(query);
}

//evento que manda el valor que se mete en el input clickando boton o pulsando enter
searchBtn.addEventListener('click', handleInput);
inputElement.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleInput();
  }
});
// evento que obtiene el valor de la entrada en el campo de texto y pinta las imagenes a medida que se escribe
// lo descarto por que creo es menos funcional que los 2 anteriores.
/* inputElement.addEventListener('input', (event) => {
  query = event.target.value;
  getImages(query);
}); */
