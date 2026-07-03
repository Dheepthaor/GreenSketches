const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const title = document.getElementById("slideTitle");
const subtitle = document.getElementById("slideSubtitle");
const sub = document.getElementById("slideSub");

const data = [
  { t: "Crafting Outdoor Spaces", s: "That Breathe", p: "WHERE NATURE MEETS DESIGN" },
  { t: "Designing Gardens", s: "Full of Life", p: "YOUR VISION, OUR CRAFT" },
  { t: "Transforming Spaces", s: "Into Green Sanctuaries", p: "HARMONY BETWEEN EARTH & ART" }
];

let current = 0;

function showSlide(i) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("dot-active");

  current = i;

  slides[current].classList.add("active");
  dots[current].classList.add("dot-active");

  title.style.opacity = 0;
  subtitle.style.opacity = 0;
  sub.style.opacity = 0;

  setTimeout(() => {
    title.textContent = data[current].t;
    subtitle.textContent = data[current].s;
    sub.textContent = data[current].p;

    title.style.opacity = 1;
    subtitle.style.opacity = 1;
    sub.style.opacity = 1;
  }, 300);
}

function goToSlide(i) {
  showSlide(i);
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
}

setInterval(nextSlide, 5000);

window.goToSlide = goToSlide;

// REVEAL
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

items.forEach(el => observer.observe(el));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const galleryImages = document.querySelectorAll(".img-card img");

if (lightbox && lightboxImg && galleryImages.length > 0) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });

    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });

}