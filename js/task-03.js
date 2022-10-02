const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
galleryEl.style.display = 'flex';
galleryEl.style.listStyle = 'none';
galleryEl.style.gap = '1rem';

const imagesList = images.reduce((itemEl, { url, alt }) => {
  itemEl += `<li> <img src='${url}' alt='${alt}'> </li>`;
  return itemEl;
}, '');

galleryEl.insertAdjacentHTML('beforeend', imagesList);

// Ещё мариант добавления тегов (через map() подготовленных строк)(по Репете)
// ----------------------------------------------------------
// const makeGalleryItemMarkup = ({ url, alt }) => {
//   return `<li> <img src='${url}' alt='${alt}'> </li>`;
// };

// const makeGalleryMarkup = images.map(makeGalleryItemMarkup).join('');

// galleryEl.insertAdjacentHTML('beforeend', makeGalleryMarkup);
// ----------------------------------------------------------

const imgElArr = document.querySelectorAll('.gallery li img');

imgElArr.forEach(imgEl => {
  imgEl.style.display = 'block';
  imgEl.style.width = '300px';
  imgEl.style.height = '100%';
  imgEl.style.boxShadow = '6px 5px 2px 0px rgba(20, 20, 50, 0.2)';
});

//
//

//
//
//
//
//
//
//
//-----------------------------------------------
//Вариант через appendChild
// const imagesList = images.map(image => {
//   const itemEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   itemEl.appendChild(imgEl);
//   console.log(imgEl);
//   console.log(itemEl);
//   return itemEl;
// });
// galleryEl.append(...imagesList);
