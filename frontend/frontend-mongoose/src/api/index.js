import axios from 'axios';

export const fetchTasks = (token) => {
    return axios.get('https://localhost:5001/api/tareas', {
        headers: {
            'Authorization': `Bearer <token>`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}