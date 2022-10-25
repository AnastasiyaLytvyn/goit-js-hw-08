// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const itemsMarkUp = createGalleryItemsMarkup(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", itemsMarkUp);
paletteContainer.addEventListener("click", onImageClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                </a>
            </div>`;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>
`);

  instance.show();
}