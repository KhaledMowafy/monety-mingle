import axios from 'axios';

const BASE_URL = 'https://api.currencybeacon.com/v1';
const API_KEY = '1ZpkQEGWWW75FB0WpnCFm2X9fWA5XjNk';


const API = {

    
    readAll: async (path:string, query:string) => {
        try {
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                }
            })
            const response = await authAxios.get(`${BASE_URL}${path}?api_key=${API_KEY}&${query}`)
            return response.data;
        } catch (err:unknown) {
            return err;
        }
    },

    read: async (path:string, id:number) => {
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
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
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
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
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
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
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
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