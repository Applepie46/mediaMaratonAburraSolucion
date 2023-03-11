const userController = {
    // gets API colombia information for cities and render the index view
    formView: async (req, res) => {
        try {
            const cities = [];
            const resp = await fetch("https://api-colombia.com/api/v1/Department/2/cities");
            const data = await resp.json();

            data.forEach(city => {
                cities.push(city.name);
            })
            res.render("index", { cities, title: "Formulario de registro" });
        } catch (error) {
            console.log(error);
            res.render("error", { error });
        }
    },
};

module.exports = userController;