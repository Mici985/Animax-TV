// script.js

// 🌙 Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Save preference
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 🌓 On load: apply saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// 🔍 Search Filter (Live)
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".anime-card");
  cards.forEach(card => {
    const title = card.querySelector("p").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});

// 🎬 Poster Click Handler (Placeholder)
function openAnime(animeId) {
  // Example: open new tab with player.html?anime=naruto
  window.open(`player.html?anime=${animeId}`, '_blank');
}
<script>
  // Jab Naruto poster pe click ho
  document.getElementById("narutoPoster").addEventListener("click", function () {
    // Anime ka naam localStorage me save karo
    localStorage.setItem("selectedAnime", "Naruto");
    // Episode page kholo
    window.location.href = "episode.html";  // same tab
    // ya
    // window.open("episode.html", "_blank");  // new tab
  });
</script>
