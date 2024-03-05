document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.col');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const circleIndex = document.querySelector('.circle-index');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function updateCircleIndex(index) {
        circleIndex.innerHTML = '';
        slides.forEach((slide, i) => {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            circle.classList.toggle('active', i === index);
            circleIndex.appendChild(circle);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
        updateCircleIndex(currentIndex);
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    });

    showSlide(currentIndex);
    updateCircleIndex(currentIndex);
});
