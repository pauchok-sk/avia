export default function purposeInput() {
  const buttons = document.querySelectorAll(".s-hero__purpose-btn");

  if (buttons.length) {
    const input = document.querySelector("#hero-purpose-input");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("_active"));

        btn.classList.add("_active");

        input.value = btn.textContent;
      });
    });
  }
}
