const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ffeffbfc0d65b89aac68fa4381de9d34&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}