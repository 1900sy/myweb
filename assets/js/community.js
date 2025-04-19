document.getElementById('ask-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const questionText = this.querySelector('textarea').value;
    
    // 前端模拟添加新问题
    const newQuestion = document.createElement('div');
    newQuestion.className = 'qa-item';
    newQuestion.innerHTML = `
        <div class="question">
            <h3>Q: ${questionText}</h3>
        </div>
        <div class="answer">
            <p>A: 问题已提交，等待回答中...</p>
        </div>
    `;
    
    document.querySelector('.qa-list').prepend(newQuestion);
    this.reset();
    alert('问题提交成功！');
});