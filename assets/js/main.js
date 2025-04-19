// 轮播图自动切换
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function rotateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(rotateSlides, 3000);

// 按钮点击动画
document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => e.target.style.transform = '', 100);
    });
});