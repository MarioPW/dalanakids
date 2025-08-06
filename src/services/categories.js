import axios from "axios";
export class CategoriesService {
    constructor() {
        this.apiURL = "https://products-api-fnrx.onrender.com/api/v1"
    }

    getAllCategories = () => {
        try {
            return axios.get(`${this.apiURL}/categories`)
        } catch (error) {   
            console.error('Error al hacer la solicitud:', error.message);
        }
    }
    createCategory = (category) => {
        try {
            const response = axios.post(`${this.apiURL}/categories`, category, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${localStorage.getItem('token')}`
                  }
            })
            return response
        } catch (error) {
            console.error('Error al hacer la solicitud:', error.message);
        }
    }
    deleteCategory = async (id) => {
        try {
            const response = await axios.delete(`${this.apiURL}/categories/{category_id}?id=${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${localStorage.getItem('token')}`
                }
            })
            return response.data
        } catch (error) {
            console.error('Error al hacer la solicitud:', error.message);
        }
    }
}