// Global JavaScript functions will be added here

// Function to prevent zooming
function preventZoom() {
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
}

// Call preventZoom on page load
window.onload = preventZoom;
