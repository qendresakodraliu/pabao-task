
const shuffleValues = () => {
    const checkboxContainer = document.getElementById("checkboxContainer");
    const checkboxes = Array.from(checkboxContainer.getElementsByClassName("checkbox"));

    checkboxContainer.innerHTML = "";

    checkboxes
      .sort(() => 0.5 - Math.random())
      .map((checkbox) => checkboxContainer.appendChild(checkbox));
  };

  const showSelectedValues = () => {
    const checkboxContainer = document.getElementById("checkboxContainer");
    const checkboxes = Array.from(checkboxContainer.getElementsByTagName("input"))
    const selectedValues = [];

    checkboxes.map((checkbox) => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });

    const displayArea = document.getElementById("displayArea");
    displayArea.innerHTML = "Selected values: " + selectedValues.join(", ");
  };

  const changeValues = () => {
    const checkboxContainer = document.getElementById("checkboxContainer");
    const checkboxes = Array.from(checkboxContainer.getElementsByTagName("input"))

    checkboxes.map((checkbox) => {
      const randomValue = Math.random();
      checkbox.checked = randomValue < 0.5;
    });
  };

