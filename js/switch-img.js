
img = document.getElementById('switch-img');
const images = ['public/img/byn4.webp', 'public/img/byn4-5.webp'];

img.addEventListener('mouseover', () => {
    img.src = images[1];
    img.classList.add('transition-transform', 'duration-500', 'scale-105');

});
img.addEventListener('mouseout', () => {
    img.src = images[0];
    img.classList.remove('scale-105');

});