const slider = document.querySelector('.slider');

// Fake API'den alınmis mehsul sekilleri
const products = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300'
];

// Her bir mehsul ucun bir slide 
products.forEach(product => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = `<img src="${product}" alt="Product">`;
  slider.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Slide'ı ireli geri cekmek funksiyasi
function moveSlider(direction) {
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % slides.length;
  } else {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }
  const displacement = -currentIndex * slides[0].offsetWidth;
  slider.style.transform = `translateX(${displacement}px)`;
}

// Avtomatik olaraq slide'i deyisme
const interval = setInterval(() => {
  moveSlider('next');
}, 3000);

// Slide'ı durdurma ve başlatma
slider.addEventListener('mouseenter', () => {
  clearInterval(interval);
});

slider.addEventListener('mouseleave', () => {
  interval = setInterval(() => {
    moveSlider('next');
  }, 3000);
});


