const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", () => {
    removeActiveClasses();
    panels[i].classList.add("active");
  });
}
