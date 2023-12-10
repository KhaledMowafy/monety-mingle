import axios from 'axios';

const BASE_URL = '';

const API = {

    
    readAll: async (path:string) => {
        try {
            const token = localStorage.getItem("accessToken");
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const response = await authAxios.get(`${BASE_URL}${path}`)
            return response.data;
        } catch (err:unknown) {
            return err;
        }
    },

    read: async (path:string, id:number) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.get(`${BASE_URL}${path}/${id}`)
            return response.data;
        } catch (err) {
            return err;
        }
    },
    create: async (path:string, data:object) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.post(`${BASE_URL}${path}`, data)
            return response.data;
        } catch (err) {
            return err;
        }
    },
    update: async (path:string, data:object, id:string) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.post(`${BASE_URL}${path}/${id}`, data)
            return response.data;
        } catch (err) {
            return err;
        }
    },
    delete: async (path:string, data:object) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.delete(`${BASE_URL}${path}`, data)
            return response.data;
        } catch (err) {
            return err;
        }
    },

}



export default API;