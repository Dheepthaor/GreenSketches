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
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919633335918"; // Your WhatsApp number (country code + number)

    const text =
`Hello GreenSketches,

I would like to enquire about your landscaping services.

Name: ${name}
Email: ${email}
Phone: ${phone}

Project Details:
${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});
document.querySelectorAll(".contact-form input, .contact-form textarea")
.forEach(field => {

    field.addEventListener("input", function () {
        if (this.value.trim() !== "") {
            this.classList.add("active");
        } else {
            this.classList.remove("active");
        }
    });

});
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    if (mobileMenu.style.right === "0px") {

        mobileMenu.style.right = "-100%";

    } else {

        mobileMenu.style.right = "0";

    }

});
function setHeroImages() {
  const isMobile = window.innerWidth <= 768;

  const slides = document.querySelectorAll(".slide");

  slides[0].style.backgroundImage = isMobile
    ? "url('images/hero1-mobile.jpg')"
    : "url('images/hero1.jpeg')";

  slides[1].style.backgroundImage = isMobile
    ? "url('images/hero2-mobile.jpg')"
    : "url('images/hero2.jpeg')";

  slides[2].style.backgroundImage = isMobile
    ? "url('images/hero3-mobile.jpg')"
    : "url('images/hero3.jpeg')";
}

window.addEventListener("load", setHeroImages);
window.addEventListener("resize", setHeroImages);