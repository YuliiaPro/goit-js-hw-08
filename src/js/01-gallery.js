// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const listEl = document.querySelector(".gallery");
listEl.style.listStyle = 'none';

const galleryList = (arr, container) => {
    const galleryMarkup = arr.
    map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" title="${description}" src="${preview}" alt="${description}" />
    </a>
    </li>`
    ) 
    .join("");
    container.insertAdjacentHTML("beforeend", galleryMarkup);
 };

galleryList(galleryItems, listEl);


const modalInstance = new SimpleLightbox(".gallery a", {captionDelay: 250, captionPosition:"button"});
console.log(modalInstance);