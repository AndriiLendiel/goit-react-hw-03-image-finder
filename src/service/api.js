import axios from 'axios';



axios.defaults.baseURL = 'https://pixabay.com/api/';


export const getData = async (name, num) => {
const response = await axios.get('', {
    params: {
        key: '38550917-b098f041474dc6be7e8c708d7',
        q: name,
        per_page: 12,
        page: num,
    }
})
console.log(response.data);
return response.data
}

