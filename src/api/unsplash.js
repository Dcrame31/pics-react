import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID ThS8WgrsK-QfR0_V7CYk-im_HbqicXtK7Jd5zZ7nMx8'
    }
})