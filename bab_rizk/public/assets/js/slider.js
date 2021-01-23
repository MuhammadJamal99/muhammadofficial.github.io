const slider1 = document.getElementById("glide-1");    
if(slider1){
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        // autoplay: 3000,
        hoverpause: true,
        perview: 1,
        animationDuration: 800,
        animationTimingFunc: "linear"
    }).mount();
}

AOS.init();