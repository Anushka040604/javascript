const axios = require('axios');

let url = 'https://catfact.ninja/fact';

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    } catch (error) {
        console.log(error);
    }
}
//async returns promises
getFacts();
