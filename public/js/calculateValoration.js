document.addEventListener("DOMContentLoaded", () => {
    const heighttInput = document.querySelector(".height-input");
    const weightInput = document.querySelector(".weight-input");

    const radioBtnYes = document.getElementById("radio-btn-yes");
    const radioBtnNo = document.getElementById("radio-btn-no");
    const imcInput = document.querySelector(".IMC-input");
    const resultInput = document.getElementById("valoration");

    radioBtnYes.addEventListener("change", valoration);
    radioBtnNo.addEventListener("change", valoration);
    imcInput.addEventListener("input", valoration);
    heighttInput.addEventListener("input", () => {
        radioBtnNo.checked = false;
        radioBtnYes.checked = false;
    });
    weightInput.addEventListener("input", () => {
        radioBtnNo.checked = false;
        radioBtnYes.checked = false;
    });

    function valoration() {
        if (imcInput.value) {
            if (radioBtnNo.checked && imcInput.value == "Peso normal o adecuado") {
                resultInput.value = "ACTO"
            } else if (radioBtnYes.checked && imcInput.value != "Peso normal o adecuado") {
                resultInput.value = "NO ACTO"
            }
        } else {
            resultInput.value = "Ingresa los campos de altura y peso"
        }
    }

    valoration();
});