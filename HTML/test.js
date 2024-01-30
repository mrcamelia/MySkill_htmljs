const sections = document.querySelectorAll("[data-id='scrollspy'] section");
const navLinks = document.querySelectorAll("[data-id='scrollspy-nav'] a");
const nav = document.querySelector("[data-id='scrollspy-nav']");
const lastElHeight =
  sections[sections.length - 1].getBoundingClientRect().height + 200;

window.onscroll = (el) => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let navHeight = nav.offsetHeight;
    let offset = section.offsetTop - navHeight;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    console.log(offset);

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`nav a[href*="${id}"]`).classList.add("active");
      });
    }

    if (
      sections[sections.length - 1].getBoundingClientRect().top < lastElHeight
    ) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`nav a[href*="${id}"]`).classList.add("active");
      });
    }
  });
};
