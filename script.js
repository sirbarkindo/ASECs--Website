/* 1067 CONTRIBUTION START - Mobile navigation toggle (JavaScript) */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  });
});
/* 1067 CONTRIBUTION END */

/* MEMBER 07 CONTRIBUTION START - Software Engineering program card polish (CSS) */
#software article:first-child {
  border-top: 4px solid var(--green);
}
/* MEMBER 07 CONTRIBUTION END */
