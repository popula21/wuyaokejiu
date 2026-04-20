const progressBar = document.querySelector("#progressBar");
const toggle = document.querySelector("#textToggle");
const navLinks = [...document.querySelectorAll(".dossier a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateProgress() {
  const scrollTop = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? Math.min(scrollTop / max, 1) : 0;
  progressBar.style.width = `${ratio * 100}%`;
}

function updateActiveLink() {
  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 140) {
      current = section.id;
    }
  }

  for (const link of navLinks) {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", isActive);
  }
}

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("large-text");
  toggle.textContent = document.body.classList.contains("large-text")
    ? "恢复字号"
    : "放大正文";
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveLink();
}, { passive: true });

updateProgress();
updateActiveLink();
