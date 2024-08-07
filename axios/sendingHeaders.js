const axios = require('axios');

const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        let res = await axios.get(url, {
            headers: { 'Accept': 'application/json' }
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
//Accept: application/json header to return the response in JSON format
getJokes();

