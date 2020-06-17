const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const city = encodeURI(direccion);

    /*const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=?location=${city}`,
        headers: { 'X-RapidAPI-Key': '726c91fbf8msha517449e0e9917cp1081dajsnaa24a14afc97' }
    });  */

    /*const resp = await instance.get();
        if(resp.data.Results.length === 0) {
            throw new Error(`No hay resultados para ${direccion}`);
        }
        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

    */
    let weather = await axios({
        metod: 'get',
        url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${city}`,
        timeout: 10000,
        headers: { 'x-rapidapi-key': 'b95daae5b4msh1c66b59fa9eb6a7p108111jsnf435c845eee4' }
    })

    let cityName, lat, lng;

    if (!weather.data.Results) {
        cityName = 'New York City, New York'
        lat = '40.750000'
        lng = '-74.00000'
    }

    return { cityName, lat, lng }
}

module.exports = {
    getLugarLatLng
}