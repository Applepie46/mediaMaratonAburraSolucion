document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const form = document.querySelector(".form-container");
    const radioInputEl = document.querySelectorAll(".question");
    const popUp = document.querySelector(".pop-up-container");

    // Saves the data of the form into the local storage
    function saveInfo() {
        // Checks which radio button is pressed
        let checkedValue;
        for (let radioButton of radioInputEl) {
            if (radioButton.checked) {
                checkedValue = radioButton.value;
                break;
            }
        }
        //Object with form data
        let userInfo = {
            name: document.getElementById("name").value,
            idNumber: document.getElementById("idNumber").value,
            email: document.getElementById("email").value,
            city: document.getElementById("city").value,
            height: document.getElementById("height").value,
            weight: document.getElementById("weight").value,
            imc: document.getElementById("imcCalc").value,
            size: document.getElementById("size").value,
            question: checkedValue,
            estimation: document.getElementById("estimation").value
        };
        //change the object with data into JSON format and then saves the data into the local storage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    // Takes the user data from local storage and then it updates a div inside the pop up to show the data
    function showInfo() {
        // Brings the data from localStorage
        const userInfo = JSON.parse(localStorage.getItem(("userInfo")));
        // pop up div element
        const userInfoContainer = document.querySelector(".user-info-container");
        // the innerHTML of the div get updates with localStorage data
        userInfoContainer.innerHTML = `
                    <p>${ userInfo.name }</p>
                    <p>${ userInfo.idNumber }</p>
                    <p>${ userInfo.email }</p>
                    <p>
                        <strong class="strong">
                            Ciudad:
                        </strong> 
                        ${ userInfo.city }
                    </p>
                    <p>
                        <strong class="strong">
                            Altura:
                        </strong> 
                        ${ userInfo.height }mts
                    </p>
                    <p>
                        <strong class="strong">
                            Peso:
                        </strong> 
                        ${ userInfo.weight }kg
                    </p>
                    <p>
                        <strong class="strong">
                            IMC(índice de masa corporal):
                        </strong>
                        ${ userInfo.imc }
                    </p>
                    <p>
                        <strong class="strong">
                            Talla camiseta:
                        </strong> 
                        ${ userInfo.size }
                    </p>
                    <p id="check-question">¿Durante el ejercicio o deporte que practica ha tenido dolor en el pecho?</p>
                    <p>
                        <strong class="strong">
                            respuesta:
                        </strong> 
                        ${ userInfo.question === undefined ? "" : userInfo.question }
                    </p>
                    <p>
                        <strong class="strong">
                            Valoracion:
                        </strong>
                        ${ userInfo.estimation }
                    </p>`
        // Add a class that makes appear the pop up            
        popUp.classList.add("active-pop-up");
    }
    
    // Validates the iputs of the form that are mandatory
    function validations() {
        const errors = [];
        

        // Validate name input
        const nameInput = document.getElementById("name");
        const downErrorName = nameInput.parentElement.querySelector('.text-danger');
        if (nameInput.value === "" || nameInput.value === null || nameInput.value === undefined) {
            nameInput.classList.add("is-invalid");
            nameInput.focus();
            if (!downErrorName) {
                nameInput.parentElement.innerHTML += `<p class="text-danger">El campo <strong>Nombre</strong> debe ser diligenciado</p>`;
            } else {
                downErrorName.textContent = 'El campo Nombre debe ser diligenciado';
            }
            errors.push("El campo Nombre debe ser diligenciado");
        } else {
            nameInput.classList.remove("is-invalid");
            if (downErrorName) {
                downErrorName.remove();
            }
        }

        // Validate ID number input
        const idNumberInput = document.getElementById("idNumber");
        const downErrorId = idNumberInput.parentElement.querySelector('.text-danger');
        if (idNumberInput.value === "" || idNumberInput.value === null || idNumberInput.value === undefined) {
            idNumberInput.classList.add("is-invalid");
            idNumberInput.focus();
            if (!downErrorId) {
                idNumberInput.parentElement.innerHTML += `<p class="text-danger">El campo <strong>Numero de identificacion</strong> debe ser diligenciado</p>`;
            } else {
                downErrorId.textContent = 'El campo numero de identificacion debe ser diligenciado';
            }
            errors.push("El campo numero identificacion debe ser diligenciado");
        } else {
            idNumberInput.classList.remove("is-invalid");
            if (downErrorId) {
                downErrorId.remove();
            }
        }

        // Validate size select
        const sizeSelect = document.getElementById("size");
        const downErrorSize = sizeSelect.parentElement.querySelector('.text-danger');
        if (sizeSelect.value === "" || sizeSelect.value === null || sizeSelect.value === undefined) {
            sizeSelect.classList.add("is-invalid");
            if (!downErrorSize) {
                sizeSelect.parentElement.innerHTML += `<p class="text-danger">Debes seleccionar una <strong>Talla</strong></p>`;
            } else {
                downErrorSize.textContent = 'Debes seleccionar una talla';
            }
            errors.push("El campo seleccionar una talla debe ser diligenciado");
        } else {
            sizeSelect.classList.remove("is-invalid");
            if (downErrorSize) {
                downErrorSize.remove();
            }
        }

        return errors;
    }
    /* Add a listener to the form so when it tries to get 
    submited it firsts validate the form and then it triggers the functions saveInfo and showInfo */
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const errors = validations();
        if (errors.length > 0) {
            return;
        }

        saveInfo();
        showInfo();
    });

});