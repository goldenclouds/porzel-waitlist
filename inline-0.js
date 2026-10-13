
    document.getElementById('signup-form').addEventListener('submit', function (event) {
      event.preventDefault();
      document.getElementById('form-status').textContent = 'Thanks for trying the preview. The waitlist is not connected yet, so nothing was sent or saved.';
    });
  