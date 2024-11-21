

window.sr = ScrollReveal();

  sr.reveal('.nombre-banda', {
      duration: 2000,
      origin: 'top',
      distance: '-100px'
  });

  sr.reveal('.wrapper', {
      duration: 4000,
      origin: 'right',
      distance: '-100px'
  });

  sr.reveal('.videoxxx', {
    duration: 1000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.videofx', {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'  
});














const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
