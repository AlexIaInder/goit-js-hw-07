import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(elem => {
  const galleryItem = document.createElement('div');
  galleryItem.classList = 'gallery__item';
  const galleryLink = document.createElement('a');
  galleryLink.classList = 'gallery__link';
  galleryLink.href = 'elem.original';
  const galleryImg = document.createElement('img');
  galleryImg.classList = 'gallery__image';
  galleryImg.src = elem.preview;
  galleryImg.hasAttribute('data-source', elem.original);
  galleryImg.alt = elem.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImg);
  items.push(galleryItem);
});

gallery.append(...items);

gallery.addEventListener('click', eve => {
    eve.preventDefault();
    if (eve.target.nodeName !== 'IMG') {
  return
}

    const selectedImage = eve.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    gallery.addEventListener('keydown', eve => {
    if (eve.key === 'Escape') {
    instance.close()
    }
  })
})