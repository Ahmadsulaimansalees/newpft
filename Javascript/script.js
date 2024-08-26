// Hide preloader when page is loaded
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2500);
});

// -----------------------------

// -- DETECT MOBILE DEVICES -------------//

  if(/Android|webOS|iPhone|iPad|Blackberry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Redirect To index2.html
    window.location.href='../index2.html'; }
