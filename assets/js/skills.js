 // 进度条动画
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress');
            
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
            
            // 图片点击放大查看
            const galleryImages = document.querySelectorAll('.gallery img');
            galleryImages.forEach(img => {
                img.addEventListener('click', function() {
                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
                    overlay.style.display = 'flex';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    overlay.style.zIndex = '1000';
                    overlay.style.cursor = 'zoom-out';
                    
                    const enlargedImg = document.createElement('img');
                    enlargedImg.src = this.src;
                    enlargedImg.style.maxWidth = '90%';
                    enlargedImg.style.maxHeight = '90%';
                    enlargedImg.style.objectFit = 'contain';
                    
                    overlay.appendChild(enlargedImg);
                    document.body.appendChild(overlay);
                    
                    overlay.addEventListener('click', function() {
                        document.body.removeChild(overlay);
                    });
                });
            });
        });