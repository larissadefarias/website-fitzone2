const images = document.querySelector('.carrossel-imagens');
const totalImages = document.querySelectorAll('.carrossel-imagens img').length;
let index = 0;

document.querySelector('.proximo').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    images.style.transform = `translateX(${-index * 100}%)`;
 });

document.querySelector('.anterior').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    images.style.transform = `translateX(${-index * 100}%)`;
 });
