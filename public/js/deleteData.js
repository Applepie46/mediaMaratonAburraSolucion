document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const deleteBtn = document.querySelector(".check-btn");

    // Adds a listener to the button
    deleteBtn.addEventListener("click", deleteData);

    // Validates if there is an item in stored in localStorage and deletes the data the it reloads the page
    function deleteData() {
        try {
            if (localStorage.userInfo) {
                localStorage.removeItem("userInfo");
            }
            document.location.reload();
        } catch (error) {
            console.log();
        }

    }
});