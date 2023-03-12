document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const heighttInput = document.querySelector(".height-input");
    const weightInput = document.querySelector(".weight-input");
    const radioBtnYes = document.getElementById("radio-btn-yes");
    const radioBtnNo = document.getElementById("radio-btn-no");
    const imcInput = document.querySelector(".IMC-input");
    const resultInput = document.getElementById("estimation");

    // Adds a listener to input elements to see if the value is changing
    radioBtnYes.addEventListener("change", estimationResult);
    radioBtnNo.addEventListener("change", estimationResult);
    imcInput.addEventListener("input", estimationResult);

    // Adds an event listener to both height and weight listener 
    heighttInput.addEventListener("input", () => {
        radioBtnNo.checked = false;
        radioBtnYes.checked = false;
        resultInput.value = "";
    });
    weightInput.addEventListener("input", () => {
        radioBtnNo.checked = false;
        radioBtnYes.checked = false;
        resultInput.value = "";
    });

    // Validates if the value of the IMC and acording to the value the estamate gest calculated
    function estimationResult() {
        if (imcInput.value) {

            switch (true) {
                case (radioBtnNo.checked && imcInput.value === "Peso normal o adecuado"):
                    resultInput.value = "ACTO";
                    break;
                case (radioBtnYes.checked && imcInput.value !== "Peso normal o adecuado"):
                    resultInput.value = "NO ACTO";
                    break;
                case (radioBtnYes.checked && imcInput.value === "Peso normal o adecuado"):
                    resultInput.value = "NO ACTO";
                    break;
                case (radioBtnNo.checked && imcInput.value !== "Peso normal o adecuado"):
                    resultInput.value = "NO ACTO";
                    break;
                default:
                    break;
            }

        } else {
            resultInput.value = "";
        }
    }
    // the function gest called again so we can know the value of the IMCInput in real time
    estimationResult();
});