document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const form = document.querySelector(".form-container")
    const radioInputEl = document.querySelectorAll(".question");
    const submItBtn = document.querySelector(".user-info");
    

    //Pop up elements
    const popUp = document.querySelector(".pop-up-container");
    const p = document.querySelector(".pop-up-container");

    // Saves the data of the form into the local storage
    function saveInfo() {
        // Checks which radio button is pressed
        let checkedValue;
        for(let radioButton of radioInputEl) {
            if (radioButton.checked) {
                checkedValue = radioButton.value;
                break;
            }
        }
        //Object with form data
        let userInfo = {
            id: 1,
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
                    <p>${userInfo.name}</p>
                    <p>${userInfo.idNumber}</p>
                    <p>${userInfo.email}</p>
                    <p>
                        <strong class="strong">
                            Ciudad:
                        </strong> 
                        ${userInfo.city}
                    </p>
                    <p>
                        <strong class="strong">
                            Altura:
                        </strong> 
                        ${userInfo.height}mts
                    </p>
                    <p>
                        <strong class="strong">
                            Peso:
                        </strong> 
                        ${userInfo.weight}kg
                    </p>
                    <p>
                        <strong class="strong">
                            IMC():
                        </strong>
                        ${userInfo.imc}
                    </p>
                    <p>
                        <strong class="strong">
                            Talla camiseta:
                        </strong> 
                        ${userInfo.size}
                    </p>
                    <p id="check-question">¿Durante el ejercicio o deporte que practica ha tenido dolor en el pecho?</p>
                    <p>
                        <strong class="strong">
                            respuesta:
                        </strong> 
                        ${userInfo.question}
                    </p>
                    <p>
                        <strong class="strong">
                            Valoracion:
                        </strong>
                        ${userInfo.estimation}
                    </p>`
        // Add a class that makes appear the pop up            
        popUp.classList.add("active-pop-up");
    }
    // Element form get a listener when user submiting the form
    // Activates previous fucntions to save data and Show data
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        saveInfo();
        showInfo()
    });
});