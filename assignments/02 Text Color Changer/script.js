const mainHeading = document.getElementById("mainHeading");

// Get the color buttons and convert them to an array
const colorButtons = Array.from(
  document.getElementsByClassName("color-buttons")
);

colorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
      // Get the ID of the clicked button
      const buttonId = event.target.id;

      //   update the text color based on the button ID
      switch (buttonId) {
        case "redButton":
          mainHeading.style.color = "#e74c3c";
          break;
        case "greenButton":
          mainHeading.style.color = "#2ecc71";
          break;
        case "blueButton":
          mainHeading.style.color = "#3498db";
          break;
        case "purpleButton":
          mainHeading.style.color = "#9b59b6";
          break;
        case "resetButton":
          mainHeading.style.color = "#fff";
          break;
      }
    }
  });
});
