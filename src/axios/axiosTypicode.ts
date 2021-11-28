import axios from 'axios';

export const axiosTypicode = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
