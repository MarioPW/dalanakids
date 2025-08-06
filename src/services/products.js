import axios from "axios"


export class ProductServices {
     constructor() { 
          this.apiURL = "https://products-api-fnrx.onrender.com/api/v1"
          this.token = localStorage.getItem('token')
          this.headers = {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${this.token}`
          }

     }
     getAllProducts = () => {
          try {
               return axios.get(`${this.apiURL}/products`)
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
     getProductsByCategory = (category) => {
          try {
               return axios.get(`${this.apiURL}/products/categories/${category}`)
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
     getProductById = (id) => {
          try {
               return axios.get(`${this.apiURL}/products/{product_id}?id=${id}`)
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
     getImgHost = () => {
          try {
               return axios.get(`${this.apiURL}/products/image_host/`, {headers: this.headers})
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message)
          }
     }
     createProduct = (product) => {
          try {
               return axios.post(`${this.apiURL}/products`, product, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${this.token}`
                    }
                  })
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
     deleteProduct = (id) => {
          try {
               return axios.delete(`${this.apiURL}/products/${id}?id=${id}`, {headers: this.headers})
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
}

