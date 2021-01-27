const slider1 = document.getElementById("glide-1");
const slider2 = document.getElementById("glide-2");
const slider3 = document.getElementById("glide-3");
const slider4 = document.getElementById("glide-4");

if(slider1){
  new Glide(slider1, {
      type: "carousel",
      startAt: 0,
      autoplay: 3000,
      hoverpause: true,
      perview: 1,
      animationDuration: 800,
      animationTimingFunc: "linear"
  }).mount();
}
// latest products
if (slider2) {
  new Glide(slider2, {
    type: "carousel",
    startAt: 0,
    perView: 4,
    rewin: false,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}
// testiminals
if (slider3) {
  new Glide(slider3, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    rewin: false,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
  }).mount();
}

// News
if (slider4) {
  new Glide(slider4, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    rewin: false,
    autoplay: 3000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      998: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
}