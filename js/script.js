document.addEventListener("DOMContentLoaded", function () {
  const answerButtons = document.querySelectorAll('#answer');
  const mouseTexts = ['25%', '50%', '75%'];

  let index=0;
  let currentQuestionIndex = 2;

  answerButtons.forEach(function (answerButton) {
    answerButton.addEventListener('click', function () {
      answerButton.classList.toggle('clicked');

      if (answerButton.id === 'answer') {
        const nextQuestion = document.querySelector(`.question:nth-child(${currentQuestionIndex})`);
        if (nextQuestion && nextQuestion.style.opacity !== '1') {
          nextQuestion.style.opacity = 1;

          const buttons = document.querySelectorAll(`.question:nth-child(${currentQuestionIndex}) .buttons div`);
          buttons.forEach(function (button) {
            button.style.pointerEvents = 'auto';
          });

          if (answerButton.classList.contains('yes-button')) {
            answerButton.querySelector('.hover-yes').style.opacity = 1;
            answerButton.style.pointerEvents='none';
          } else if (answerButton.classList.contains('no-button')) {
            answerButton.querySelector('.hover-no').style.opacity = 1;
            answerButton.style.pointerEvents='none';
          }

          document.querySelector('.follow-text').textContent = mouseTexts[index];
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

      followText.style.left = newX + "px";
      followText.style.top = newY + "px";

      requestAnimationFrame(updateTextPosition); 
  }

  document.addEventListener("mousemove", updateTextPosition);
});

function onSubmit() {
      window.location.href = "enterCode.html";
}