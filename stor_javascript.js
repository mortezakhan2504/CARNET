// ===================================================================
// ===================================================================
// بخش اسلایدر
function updateActiveClass() {
    const slides = document.querySelectorAll('.stor_slid');
    slides.forEach(slide => slide.classList.remove('activ_info_stor_box'));

    // اسلاید وسطی را با توجه به تعداد اسلایدها پیدا کنید
    const middleIndex = Math.floor(slides.length / 2);
    slides[middleIndex].classList.add('activ_info_stor_box');
}

function go_l() {
    const slider = document.querySelector('.stor_slider');
    slider.appendChild(slider.firstElementChild);
    updateActiveClass();
}

function go_r() {
    const slider = document.querySelector('.stor_slider');
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    updateActiveClass();
}
updateActiveClass();
































// ===================================================================
// ===================================================================
// بخش بیلبیلک روبه بالا
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