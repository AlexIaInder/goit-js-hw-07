import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(elem => {
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__item';
  galleryLink.href = elem.original;
  const galleryImg = document.createElement('img');
  galleryImg.className = 'gallery__image';
  galleryImg.src = elem.preview;
  galleryImg.setAttribute('title', elem.description);
  galleryImg.alt = elem.description;

  galleryLink.append(galleryImg);
  items.push(galleryLink);
});

gallery.append(...items);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250
});