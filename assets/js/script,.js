window.addEventListener("scroll", function () {
  const elm = document.querySelector(".btn__float");
  const scroll = window.pageYOffset;
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  if (scroll >= maxHeight) {
    elm.classList.remove("show");
  } else if (scroll > 650) {
    elm.classList.add("show");
  } else {
    elm.classList.remove("show");
  }
});