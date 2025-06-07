"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    // Removing 'hidden' class from Modal
    modal.classList.remove("hidden");
    // Removing 'hidden' class from Overlay
    overlay.classList.remove("hidden");
  });

// Closing Modal by 'X button':
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
// Closing Modal by clicking 'overlay':
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Button ESC closing Modal
document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

/* 
// SHORT VERSION CODE ABOVE --> REFACTORING CODE

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// SHORT VERSION - Removing 'hidden' class from Modal:
const openModal = function () {
  console.log("Button clicked");
    // Removing 'hidden' class from Modal
    modal.classList.remove("hidden");
    // Removing 'hidden' class from Overlay
    overlay.classList.remove("hidden");
}

// SHORT VERSION - Closing Modal:
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

*/

///////////////////////////////////////////////////////////
// SET CURRENT YEAR

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// AUTO SLIDER

// START OF IMAGE SLIDER & DOTS

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1;

// slider dots
const bottom = document.querySelector(".bottom");

for (let i = 0; i < images.length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  // adding div 'button' on bottom
  bottom.appendChild(div);
}

// adding background color to button
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "#a38066";

// after slide change button is transparent
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
    /* stop slideShow after mouseover on button */
    button.addEventListener("mouseover", stopSlideShow);
    button.addEventListener("mouseout", startSlideShow);
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 640}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "#a38066";
  });
});

// change color button after moving slides
const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "#a38066";
};

// show next photo
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 640}px)`;
  slideNumber++;
};

// show previus photo
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 640}px)`;
  slideNumber--;
};

// show first photo
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

// show last photo
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(images.length - 1) * 640}px)`;
  slideNumber = images.length;
};

// slider right (rotate slide)
/*right.addEventListener("click", () => {
  if (slideNumber < images.length) {
    nextSlide();
  } else {
    getFirstSlide();
  }
  changeColor();
}); Short version:*/
right.addEventListener("click", () => {
  slideNumber < images.length ? nextSlide() : getFirstSlide();
  changeColor();
});

// slider left (rotate slide)
/*left.addEventListener("click", () => {
  if (slideNumber > 1) {
    prevSlide();
  } else {
    getLastSlide();
  }
  changeColor();
});  Short version:*/
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getFirstSlide();
  changeColor();
});

// start Auto Slider / Slide Show (after 2.5sec - 2500)
let slideInterval;

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    slideNumber < images.length ? nextSlide() : getFirstSlide();
    changeColor();
  }, 2500);
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

startSlideShow();

// stops slide after mouseover / start after mouseout
slider.addEventListener("mouseover", stopSlideShow);
slider.addEventListener("mouseout", startSlideShow);

right.addEventListener("mouseover", stopSlideShow);
right.addEventListener("mouseout", startSlideShow);

left.addEventListener("mouseover", stopSlideShow);
left.addEventListener("mouseout", startSlideShow);

// END OF IMAGE SLIDER & DOTS

// PAYMENT GATEWAY - Set date input field's min date from today

datePickerId.min = new Date().toLocaleDateString("fr-ca");

///////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// toggle will be looking for the headerEl element that has "nav-open" and if it is not there it will add it, and if it is there it will remove it. In this case, we add the class name without a dot in front.



function isMobileDevice() {
  return window.matchMedia("(max-width: 600px)").matches;
}

function changeSliderDetails() {
  const slider1 = document.querySelector('#slider1');
  slider1.style.setProperty('--width', '300px');
  slider1.style.setProperty('--height', '200px');
}

const isMobile = isMobileDevice();

if (isMobile) {
  changeSliderDetails();
}