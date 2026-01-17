// תפריט נפתח במובייל
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// פילטר לגלריה
const tabs = document.querySelectorAll(".gallery-tab");
const items = document.querySelectorAll("[data-gallery-item]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.getAttribute("data-gallery-filter");

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    items.forEach((item) => {
      const cat = item.getAttribute("data-category");
      if (filter === "all" || cat === filter) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});

