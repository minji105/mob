document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    window.location.href = './main.html';
  }, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
  const loadingText = document.getElementById('loading-text');

  if (loadingText) {
    setTimeout(function () {
      loadingText.style.display = 'none'; 
    }, 3100);
  }
});