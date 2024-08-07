import axios from "axios";
let url = 'https://cors-anywhere.herokuapp.com/https://universities.hipolabs.com/search?name=middle&country=India';

async function getCollege() {
    try {
        let res = await axios.get(url + country);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

getCollege();