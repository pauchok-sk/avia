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

  const buttonsServices = document.querySelectorAll("[data-service]");

  if (buttonsServices.length) {
    const lists = document.querySelectorAll("[data-service-list]");

    buttonsServices.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        if (btn.classList.contains("_active")) return;
        
        const id = btn.dataset.service;
        const currentList = document.querySelector(
          `[data-service-list="${id}"]`
        );


        lists.forEach((l) => {
          l.classList.remove("_active");
          l.style.opacity = 0;
        });
        buttonsServices.forEach((b) => b.classList.remove("_active"));

        currentList.classList.add("_active");
        btn.classList.add("_active");

        setTimeout(() => {
          currentList.style.opacity = "1";
        }, 100);
      });
    });
  }
}
