import "./style.css";

export function renderImages(imagesData) {
  const imgsContainer = document.querySelector('.containerAll');
  imgsContainer.innerHTML = '';
  imagesData.forEach(imageData => {
    const imgCont = document.createElement('div');//creamos elementos necesarios de nuesta "carta de imagen"
    const image = document.createElement('img');
    const title = document.createElement('p');
    const link = document.createElement('a');

    image.classList.add('unsplashImg');//añadimos las clases que necesitaremos
    imgCont.classList.add('imgCont');
    link.href = imageData.urls.regular;
    link.target = '_blank';

    image.src = imageData.urls.regular;// añadimos la url de la imagen 
    image.alt = imageData.alt_description//añadimos la descripción de la imagen
    title.textContent = imageData.alt_description || 'Sin descripción';// añadimos el texto de la descripción al pie de la imagen

    link.appendChild(image);
    imgCont.appendChild(link);
    imgCont.appendChild(title);//añadimos los elementos a donde necesitamos
    imgsContainer.appendChild(imgCont);
  });
}
//!he añadido un <a> para que al hacer clic en la imagen se abra el enlace correspondiente en otra pagina