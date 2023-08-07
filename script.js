const toggleButton = document.querySelector(".hide-content")
const navbar = document.querySelector(".navbarlinks")
const button = document.querySelector(".btn")

function revealContent() {
  if(navbar.classList.contains("hide-content"))
  {
    navbar.classList.remove("hide-content")
  } else {
    navbar.classList.add("hide-content")
  }
}

function revealBtn() {
  if(button.classList.contains("hide-content"))
  {
    button.classList.remove("hide-content")
  } else {
    button.classList.add("hide-content")
  }
}

toggleButton.addEventListener("click", revealBtn)
toggleButton.addEventListener("click", revealContent)

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));