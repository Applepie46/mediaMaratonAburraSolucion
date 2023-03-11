document.addEventListener("DOMContentLoaded", () => {
    // Element
    const form = document.querySelector(".form-container");
    const submitBtn = document.querySelector(".button-submit");
    const nameInput = document.querySelector(".nameInput");
    const idNumberInput = document.getElementById("#idNumber");
    const sizeSelect = document.getElementById("#size");
    console.log(nameInput);
    form.addEventListener("submit", (e) => {
        const errors = [];
        e.preventDefault();
        if ( nameInput.value === "" || nameInput.value === null || nameInput.value === undefined) {
            nameInput.classList.add("is-invalid");
            nameInput.parentElement.innerHTML += `<p class="text-danger">El campo <strong>Nombre</strong> debe ser diligenciado</p>`;
        } else {
            nameInput.classList.remove("is-invalid");
        }

        if(errors.lenght === 0) {
            form.submit();
        }
    });
    
});