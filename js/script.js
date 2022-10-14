// Year to date

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile nav
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

const arrow = document.querySelector(".up-arrow");

arrow.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sticky nav and arrow

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    const upArrow = document.querySelector(".up-arrow");
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      upArrow.classList.remove("hidden");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
      upArrow.classList.add("hidden");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
