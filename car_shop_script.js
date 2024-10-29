// ===============================================================
// ===============================================================
// بیلبیلکی که صفحه رئو میبره بالا
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');

    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});


















const slides = document.querySelectorAll('.slide_car_page');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        changeSlide(index);
    });
});

document.querySelector('.nav.next').addEventListener('click', () => {
    changeSlide(currentIndex + 1);
});

document.querySelector('.nav.prev').addEventListener('click', () => {
    changeSlide(currentIndex - 1);
});

// Set the first thumbnail as active by default
thumbnails[0].classList.add('active_car_page');

function changeSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    currentIndex = index;
    const offset = index * -100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active_car_page'));
    thumbnails[index].classList.add('active_car_page');
}



