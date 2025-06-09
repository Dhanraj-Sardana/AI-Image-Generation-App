import axios from 'axios';

const API=axios.create({
    baseURL:'http://localhost:3000/api/'
})

export const getPost= async ()=> await API.get('/post/');
export const createPost=async (data)=> await API.post('/post/',data);
export const genImg=async (data)=> await API.post('/image/',data);