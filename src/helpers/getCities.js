/*async function getCities(url) {
    try {
        const apiUrl = await fetch(url);
        const data = await apiUrl.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const data = getCities("https://api-colombia.com/api/v1/Department/2/cities")
    .then(data => {
        const cities = [];
        data.forEach(city => {
            cities.push(city.name);
        })
        return cities
});*/

const getCities = async (url) => {
    try {
        const cities = [];
        const resp = fetch(url);
        const data = resp.json();

        data.forEach(city => {
            cities.push(data.name)
        });

        return cities;

    } catch (error) {
        console.log(error);
    }
}



module.exports = getCities;

//https://api-colombia.com/api/v1/Department/2/cities