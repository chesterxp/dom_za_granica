"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
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


btnNavEl.addEventListener("click", function () {
  showHideNavigation();
});

function showHideNavigation() {
  const headerEl = document.querySelector(".header");
  headerEl.classList.toggle("nav-open");
}

// toggle will be looking for the headerEl element that has "nav-open" and if it is not there it will add it, and if it is there it will remove it. In this case, we add the class name without a dot in front.


var websiteLoader = document.getElementById('preloader');

window.addEventListener(
  'load',
  function (load) {
    window.removeEventListener('load', load, false);

    setTimeout(function () {
      websiteLoader.style.display = 'none';
    }, 1500);
  },
  false
);

//zebranie i wysłanie danych z formularza
function addFormEvent() {
    const form = document.getElementById('contanct__form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);

      const country = formData.get('country');
      const destination = formData.get('destination');
      const allProperty = formData.getAll('property_type'); // checkbox: zwróci tablicę
      const propertyTypes = allProperty.length == 1 ? allProperty[0] : allProperty.join(', ');
      const maxPrice = formData.get('max_price');
      const comments = formData.get('comments');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const time = new Date();

      const params = {
        name: 'Autoamt',
        message: 'Dane formularza',
        country,
        destination,
        propertyTypes: String(propertyTypes),
        maxPrice,
        comments,
        email,
        time: String(time).replace(/TZ/, ' '),
        phone
      };

      console.log('params:', params);

      emailjs.send('service_qir66go', 'template_drcr2gp', params).then(showHideFormPopup('show'));
      form.reset();
    });
}
//zmiana wartości slidera dla wersji mobilnej
function changeSliderProps() {

  
  const slider1 = document.querySelector('#slider1');
  if (!slider1) return;
  
  const screenWidth = window.innerWidth;
  console.log('changeSliderProps', screenWidth);
  let details = {};

  if(screenWidth > 600) {
    details = {
      width: '500px',
      height: '371px',
      time: '10s'
    }
  } else {
    details = {
      width: '300px',
      height: '200px',
      time: '20s'
    }
  }

  slider1.style.setProperty('--width', details.width);
  slider1.style.setProperty('--height', details.height);
  slider1.style.setProperty('--time', details.time);
}
//zamknięcie popupa po wysłaniu danych
function addEventForFromPopup() {
  const btn = document.querySelector('.form__popupButton');

  btn.addEventListener('click', () => {
    showHideFormPopup('hide')
  });
}
//sprawdzenie czy urzadzenie jest mobilne
function isMobileDevice() {
  return window.matchMedia("(max-width: 600px)").matches;
}
//pokazanie lub schowanie popupa dla formularza
function showHideFormPopup(type) {
  const popup= document.querySelector('.form__popup');

  if(type === 'show') {
    popup.style.opacity = '1';
    popup.style.zIndex = '100';
  } else {
    popup.style.opacity = '0';
    popup.style.zIndex = '-1';
  }


  console.log('popup:', popup);
  console.log('type:', type);
}
//dodanie eventu na zesize przeglądarki
function addEventForResize() {
  window.addEventListener('resize', () => changeSliderProps());
}

//dodanie eventu w linkach nawigacji
function addEventForLinks() {
  const links = document.querySelectorAll('.main-nav-link');
  links.forEach((link) => {
    link.addEventListener('click', () => showHideNavigation());
  });
}

changeSliderProps();
addEventForResize();
addFormEvent();
addEventForFromPopup();
addEventForLinks();