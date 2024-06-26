document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    document.body.classList.add("dark-theme");
  }

  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Save preference to localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
