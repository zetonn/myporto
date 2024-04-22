// paralax
let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 1 + "px";
});

// gambar berjalan
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// popup box

