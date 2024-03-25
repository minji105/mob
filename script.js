document.addEventListener('DOMContentLoaded', function() {
    const loadingButton = document.getElementById('load-button');
  
    if (loadingButton) {
      loadingButton.addEventListener('click', function() {
        window.location.href = './loading.html';
      });
    }
  });
  