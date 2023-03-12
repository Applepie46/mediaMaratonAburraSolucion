const userController = {
    // gets API colombia information for cities and render the index view
    formView: async (req, res) => {
        try {
            
            const cities = []; // Array with the name of the cities from Colombia API
            // Fecth to colombia API to departament cities
            // In this case we call departament 2, its value is Antioquia so we get all the cities from antioquia
            const resp = await fetch("https://api-colombia.com/api/v1/Department/2/cities");
            // Parse the data from the fecth
            const data = await resp.json();

            // Iterates data and pushes each city name
            data.forEach(city => {
                cities.push(city.name);
            })

            // Renders the index view with city names array
            res.render("index", { cities, title: "Formulario de registro" });
        } catch (error) {
            console.log(error);
            res.render("error", { error });
        }
    },
};
// Exports usersController
module.exports = userController;