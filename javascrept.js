// ===============================================================
// ===============================================================
// کد های مربوط به بخش اسلایدر ماشین
document.addEventListener('DOMContentLoaded', start);
function start()
{
    
        const btnPrev = document.querySelector('.btn_scorol_r');
        const btnNext = document.querySelector('.btn_scorol_l');
        const carBoxes = document.querySelectorAll('.car_box');
        const carInfoBoxes = document.querySelectorAll('.car_box_info');
    
        var currentIndex = Math.floor(carBoxes.length / 2);
        showCarInfo(currentIndex);
    
        function showCarInfo(index) {
            carInfoBoxes.forEach(infoBox => infoBox.classList.add('none_info'));
            carInfoBoxes[index].classList.remove('none_info');
        }
    
        btnPrev.addEventListener('click', clik1);
        function clik1()
        {
            
            currentIndex = (currentIndex === 0) ? carBoxes.length - 1 : currentIndex - 1;
            rearrangeCarBoxes(currentIndex);
        }
    
        btnNext.addEventListener('click', clik2 );
        function clik2() 
        {
            currentIndex = (currentIndex === carBoxes.length - 1) ? 0 : currentIndex + 1;
            rearrangeCarBoxes(currentIndex);
        }
    
        function rearrangeCarBoxes(index) {
            const centralCarBox = carBoxes[index];
            const centralInfoBox = carInfoBoxes[index];
            const actionImg = document.querySelector('.action_img');
    
            const prevActionImg = document.querySelector('.action_img');
            if (prevActionImg) {
                prevActionImg.classList.remove('action_img');
            }
    
            
            centralCarBox.querySelector('img').classList.add('action_img');
    
            
            carInfoBoxes.forEach(infoBox => infoBox.classList.add('none_info'));
            centralInfoBox.classList.remove('none_info');
        }
    
}
// ===============================================================
// ===============================================================
// جابه جایی عکس ها باهم
    function sr()
    {      
        swapElements('in0', 'in1') ;
        swapElements('in1', 'in2') ;
        
    }
    function sl()
    {
        swapElements('in2', 'in1') ;
        swapElements('in1', 'in0') ;
    }
    function swapElements(element1Id, element2Id) {
        var element1 = document.getElementById(element1Id);
        var element2 = document.getElementById(element2Id);

        
        var parent1 = element1.parentNode;
        var parent2 = element2.parentNode;

     
        var sibling1 = element1.nextSibling;
        var sibling2 = element2.nextSibling;

        if (sibling2) {
            parent2.insertBefore(element1, sibling2);
        } else {
            parent2.appendChild(element1);
        }

        if (sibling1) {
            parent1.insertBefore(element2, sibling1);
        } else {
            parent1.appendChild(element2);
        }
    }
 

















//     اگر بخوایم انیمشن داشته باشه باید به جای بالا اینو یزاری         
// انیمشن دار کردن
    // function sr() {      
    //     animateSwap('in0', 'in1');
    //     setTimeout(() => {
    //         animateSwap('in1', 'in2');
    //     }, 500); // Delay for the duration of the transition
    // }
    
    // function sl() {
    //     animateSwap('in2', 'in1');
    //     setTimeout(() => {
    //         animateSwap('in1', 'in0');
    //     }, 500); // Delay for the duration of the transition
    // }
    
    // function animateSwap(element1Id, element2Id) {
    //     var element1 = document.getElementById(element1Id);
    //     var element2 = document.getElementById(element2Id);
    
    //     element1.classList.add('swap-animation');
    //     element2.classList.add('swap-animation');
    
    //     var rect1 = element1.getBoundingClientRect();
    //     var rect2 = element2.getBoundingClientRect();
    
    //     var deltaX = rect2.left - rect1.left;
    //     var deltaY = rect2.top - rect1.top;
    
    //     element1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    //     element2.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;
    
    //     setTimeout(() => {
    //         swapElements(element1Id, element2Id);
    //         element1.style.transform = '';
    //         element2.style.transform = '';
    //         element1.classList.remove('swap-animation');
    //         element2.classList.remove('swap-animation');
    //     }, 500); // Duration of the transition
    // }
    
    // function swapElements(element1Id, element2Id) {
    //     var element1 = document.getElementById(element1Id);
    //     var element2 = document.getElementById(element2Id);
    
    //     var parent1 = element1.parentNode;
    //     var parent2 = element2.parentNode;
    
    //     var sibling1 = element1.nextSibling === element2 ? element1 : element1.nextSibling;
    //     var sibling2 = element2.nextSibling === element1 ? element2 : element2.nextSibling;
    
    //     parent1.insertBefore(element2, sibling1);
    //     parent2.insertBefore(element1, sibling2);
    // }
    
// ===============================================================
// ===============================================================
// اسلایدر اعضای گروه

    const persons = [
        document.getElementById('pin0'),
        document.getElementById('pin1'),
        document.getElementById('pin2')
    ];
    let currentIndex = 1;

    function updateClasses() {

        persons.forEach(person => {
            person.classList.remove('c_person', 'l_person', 'r_person', 'person_none');
        });

        
        persons[currentIndex].classList.add('c_person');

        const prevIndex = (currentIndex - 1 + persons.length) % persons.length;
        const nextIndex = (currentIndex + 1) % persons.length;

        persons[prevIndex].classList.add('l_person');
        persons[nextIndex].classList.add('r_person');

        
        for (let i = 0; i < persons.length; i++) {
            if (i !== currentIndex && i !== prevIndex && i !== nextIndex) {
                persons[i].classList.add('person_none');
            }
        }
    }

    function showNextPerson() {
        currentIndex = (currentIndex + 1) % persons.length;
        updateClasses();
    }

    updateClasses();

    setInterval(showNextPerson, 3000);


// ===============================================================
// ===============================================================
// کد مربوط به حرکت با لمس ماشین ها کد باگ داره


// let touchstartX = 0;
// let touchendX = 0;
// const swipeBox = document.getElementById('swipeBox');

// swipeBox.addEventListener('touchstart', function(event) {
//   touchstartX = event.changedTouches[0].screenX;
// }, false);

// swipeBox.addEventListener('touchend', function(event) {
//   touchendX = event.changedTouches[0].screenX;
//   handleSwipe();
// }, false);

// function handleSwipe() {
//   if (touchendX < touchstartX) {
//     // Swiped left
//     sr();
//     // onSwipeLeft();
//   }
//   if (touchendX > touchstartX) {
//     // Swiped right
//     sl();
//     // onSwipeRight();
//   }
// }



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