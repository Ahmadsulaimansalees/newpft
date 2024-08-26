// Hide preloader when page is loaded
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2500);
});

// -----------------------------
