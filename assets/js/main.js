const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const loading = document.querySelector(".loading");
const scrolltop = document.querySelector(".scroll-top");
const coursesdescription = document.querySelector(".courses-description");
const programCategories = document.querySelector(".program-Categories");
const numbers = document.querySelectorAll(".Connecting-students-numbers span");
const logoImage = document.querySelector(".navbar-brand img");
const textElements = document.querySelectorAll(".img-span");
let isCounting = false;

window.addEventListener("scroll", function () {
  if (window.scrollY > header.offsetTop) {
    navbar.classList.add("small-nav-bar");
    header.style.padding = "0";
    logoImage.style.width = "120px";
    logoImage.style.height = "32px";
    navbar.style.boxShadow = "0px 10px 7px -3px rgba(0,0,0,0.1)";
  } else {
    navbar.classList.remove("small-nav-bar");
    logoImage.style.width = "160px";
    logoImage.style.height = "42px";
    navbar.style.boxShadow = "none";
  }
  if (window.scrollY > coursesdescription.offsetTop) {
    scrolltop.classList.remove("opacity-0", "invisible");
  }else {
    scrolltop.classList.add("opacity-0", "invisible");
  }
  if (window.scrollY > programCategories.offsetTop) {
    
    if (!isCounting) {
      startCounting();
    }
  } 
});

window.addEventListener("load", function () {
  setTimeout(function () {
    loading.classList.add("opacity-0", "invisible");
    document.body.style.overflow = "auto";
  }, 1600);
});

scrolltop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

function startCounting() {
  if (isCounting) {
    return;
  }

  isCounting = true;
  numbers.forEach((number) => {
    const target = parseInt(number.textContent, 10);
    const step = Math.ceil(target / 50);

    let currentValue = 0;

    const count = () => {
      if (currentValue < target) {
        number.textContent = "+" + currentValue;
        currentValue += step;
        setTimeout(count, 85);
      } else {
        number.textContent = "+" + target;
      }
    };

    count();
  });
}