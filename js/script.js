function onSubmit() {
    if (event.target.closest('#answer')) {
        window.location.href = './success.html';
    } else {
        window.location.href = './fail.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const answerButtons = document.querySelectorAll('#answer');
  const mouseTexts = ['14%', '29%', '43%', '57%', '71%', '86%'];

  let index=0;
  let currentQuestionIndex = 2;

  answerButtons.forEach(function (answerButton) {
    answerButton.addEventListener('click', function () {

      answerButtons.forEach(function(button) {
        button.style.pointerEvents = 'none';
      });

      answerButton.classList.toggle('clicked');
      answerButton.classList.add('hovered');

      if (answerButton.id === 'answer') {
        const nextQuestion = document.querySelector(`.question:nth-child(${currentQuestionIndex})`);
        if (nextQuestion && nextQuestion.style.opacity !== '1') {
          nextQuestion.style.opacity = 1;

          const buttons = document.querySelectorAll(`.question:nth-child(${currentQuestionIndex}) .buttons div`);
          buttons.forEach(function (button) {
            button.style.pointerEvents = 'auto';
          });

          document.querySelector('.follow-text').textContent = mouseTexts[index];
          document.querySelector('.scroll-indicator').textContent = mouseTexts[index];
          index++;
          currentQuestionIndex++;
        }
      } 
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const followText = document.querySelector('.follow-text');

  function updateTextPosition(event) {
      const targetX = event.clientX;
      const targetY = event.clientY + window.scrollY;

      const startX = parseInt(followText.style.left) || 0;
      const startY = parseInt(followText.style.top) || 0;

      const dx = (targetX - startX) / 10; 
      const dy = (targetY - startY) / 10;

      let newX = startX + dx;
      let newY = startY + dy;

      followText.style.left = newX + 3 + "px";
      followText.style.top = newY + 3 + "px";

      requestAnimationFrame(updateTextPosition); 
  }

  document.addEventListener("mousemove", updateTextPosition);
});


var scrollIndicator = document.querySelector('.scroll-indicator');

scrollIndicator.style.display = 'block';

window.addEventListener('scroll', function() {
  scrollIndicator.style.top = 200 + 'px';
});