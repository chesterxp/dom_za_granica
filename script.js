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
buttons[0].style.backgroundColor = "#538b09";

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
    button.style.backgroundColor = "#538b09";
  });
});

// change color button after moving slides
const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "#538b09";
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
