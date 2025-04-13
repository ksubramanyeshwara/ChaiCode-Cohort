// const nameInput = document.getElementById("nameInput");
// const jobInput = document.getElementById("jobInput");
// const ageInput = document.getElementById("ageInput");
// const bioInput = document.getElementById("bioInput");

// const nameDisplay = document.getElementById("nameDisplay");
// const jobDisplay = document.getElementById("jobDisplay");
// const ageDisplay = document.getElementById("ageDisplay");
// const bioDisplay = document.getElementById("bioDisplay");

const inputMap = {
  nameInput: nameDisplay,
  jobInput: jobDisplay,
  ageInput: ageDisplay,
  bioInput: bioDisplay,
};

const profilePreview = document.querySelector(".form-container");
console.log(profilePreview);

profilePreview.addEventListener("input", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    const inputId = e.target.id;
    const displayElement = inputMap[inputId];
    if (displayElement) {
      displayElement.textContent = e.target.value || "Not provided";
    }

    // switch (inputId) {
    //   case "nameInput":
    //     nameDisplay.textContent = nameInput.value;
    //     if (nameDisplay.textContent === "") {
    //       nameDisplay.textContent = "Not provided";
    //     }
    //   case "jobInput":
    //     jobDisplay.textContent = jobInput.value;
    //     if (jobDisplay.textContent === "") {
    //       jobDisplay.textContent = "Not provided";
    //     }
    //   case "ageInput":
    //     ageDisplay.textContent = ageInput.value;
    //     if (ageDisplay.textContent === "") {
    //       ageDisplay.textContent = "Not provided";
    //     }
    //   case "bioInput":
    //     bioDisplay.textContent = bioInput.value;
    //     if (bioDisplay.textContent === "") {
    //       bioDisplay.textContent = "Not provided";
    //     }
    // }
  }
});
