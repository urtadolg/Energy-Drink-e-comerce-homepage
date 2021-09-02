const menu = document.querySelector(".btnMenu");
const menuPanel = document.querySelector(".btnMenuPanel");
menu.addEventListener("click", () => {
  menuPanel.classList.toggle("turnOn");
});
