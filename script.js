let footerYear = document.getElementById("footer-year");
footerYear.innerHTML = new Date().getFullYear();

// Get the button
const goToTopBtn = document.getElementById("go-to-top");

// Show the button when user scrolls down 1000px
window.onscroll = function () {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    goToTopBtn.classList.add("show-go-to-top-btn");
  } else {
    goToTopBtn.classList.remove("show-go-to-top-btn");
  }
};

// Scroll to top when the button is clicked
goToTopBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
