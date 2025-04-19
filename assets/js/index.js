   // 轮播图自动切换
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const carouselInner = document.querySelector('.carousel-inner');
        
        function showSlide() {
            carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide();
        }
        
        // 3秒自动切换
        setInterval(nextSlide, 3000);
        
        // 响应式调整轮播图高度
        function adjustCarouselHeight() {
            const carousel = document.querySelector('.carousel');
            if (window.innerWidth < 768) {
                carousel.style.height = '250px';
            } else {
                carousel.style.height = '400px';
            }
        }
        
        window.addEventListener('resize', adjustCarouselHeight);
        adjustCarouselHeight();