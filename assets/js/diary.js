   // 日记筛选功能
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // 更新按钮状态
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                const diaryCards = document.querySelectorAll('.diary-card');
                
                // 筛选日记
                diaryCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // 点赞功能
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const isLiked = this.classList.contains('liked');
                const countElement = this.querySelector('.like-count');
                let count = parseInt(countElement.textContent);
                
                if (isLiked) {
                    this.classList.remove('liked');
                    count--;
                } else {
                    this.classList.add('liked');
                    count++;
                }
                
                countElement.textContent = count;
            });
        });
        
        // 新增日记按钮点击事件
        document.querySelector('.add-diary-btn').addEventListener('click', function() {
            alert('新增日记功能将在后续版本中添加！');
            // 实际项目中这里可以打开一个表单模态框
        });