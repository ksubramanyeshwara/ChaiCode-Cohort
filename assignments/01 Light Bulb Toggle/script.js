const body = document.body;
const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const statusText = document.getElementById("status");

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("on");
  body.classList.toggle("dark-mode");
  toggleButton.textContent = bulb.classList.contains("on")
    ? "Turn Off"
    : "Turn On";
  statusText.textContent = bulb.classList.contains("on")
    ? "Status: On"
    : "Status: Off";
});
