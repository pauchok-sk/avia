export default function headerServices() {
  const btn = document.querySelector(".header-b__btn-services");

  if (btn) {
    const overlay = document.querySelector(".header-b__services-overlay");
    btn.addEventListener("mouseenter", () => {
      overlay.classList.add("_active");
    });
    btn.addEventListener("mouseleave", () => {
      overlay.classList.remove("_active");
    });
  }
}
