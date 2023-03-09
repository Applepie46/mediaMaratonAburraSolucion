document.addEventListener("DOMContentLoaded", () => {
    const heighttInput = document.querySelector(".height-input");
    const weightInput = document.querySelector(".weight-input");
    const imcInput = document.querySelector(".IMC-input");


    function calculateIMC() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heighttInput.value);

        if (weight && height) {
            const imcFormula = weight / (height ** 2);

            switch (true) {
                case (imcFormula < 18.5):
                    imcInput.value = `Bajo peso`;
                    break;
                case (imcFormula >= 18.5 && imcFormula < 25):
                    imcInput.value = `Peso normal o adecuado`;
                    break;
                case (imcFormula >= 25 && imcFormula < 30):
                    imcInput.value = `Sobrepeso`;
                    break;
                case (imcFormula >= 30 && imcFormula < 35):
                    imcInput.value = `Obesidad grado 1`;
                    break;
                case (imcFormula > 40):
                    imcInput.value = `Obesidad grado 2`;
                    break;
                default:
                    imcInput.value = "Ingresa los campos de altura y peso"
                    break;
            }
        } else {
            imcInput.value = "Calculo IMC"
        }
    }

    heighttInput.addEventListener("input", calculateIMC);
    weightInput.addEventListener("input", calculateIMC);

});