
import axios from 'axios';

export class UserServices {
    constructor() {
        this.apiURL = "https://products-api-fnrx.onrender.com/api/v1"
     }
    async login(email, password) {
            const response = await axios.post(`${this.apiURL}/auth/login`,
                new URLSearchParams({
                    username: email,
                    password: password
                }));
            response.status == 200 && localStorage.setItem('token', response.data.access_token);
            return response
    }
    async register(email, password, password2) {
        const defaultName = "name";
        const reqSchema =
        {
            user_name: defaultName,
            email: email,
            password: password,
            password_confirm: password2
        }
        try {
            const response = await axios.post(`${this.apiURL}/auth/register`, reqSchema);
            return response;
        } catch (error) {
            console.error("Error registering:", error.message);
            if (error.response) {
                console.log(error.response.status);
                return false
            }
        }
    }
    async confirmRegister(code) {
        const reqSchema = {
            code: parseInt(code)
        }
        try {
            const response = await axios.post(`${this.apiURL}/auth/confirm`, reqSchema)
            return response
        } catch (error) {
            console.error("Error registering:", error.message);
        }
    }
    async deleteUser(user_id) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("No user token found. Please log in.");
            }
            const res = await axios.delete(`${this.apiURL}/auth/delete/${user_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.status === 200) {
                return { success: true, message: "User deleted successfully." };
            } else {
                throw new Error(`Unexpected response status: ${res.status}`);
            }
        } catch (error) {
            console.error("Error deleting user:", error.message);
            if (error.response) {
                return { success: false, message: error.response.data.detail || "Failed to delete user."};
            }
            return { success: false, message: error.message };
        }
    }
    async forgotPassword(email) {
        try {
            const response = await axios.post(`${this.apiURL}/auth/forgot_password/?email=${email}`)
            return response
        } catch (error) {
            return error.response
        }
    }

    async resetPassword(data) {
        try {
            const response = await axios.post(`${this.apiURL}/auth/reset_password`, data)
            return response
        } catch (error) {
            console.error("Error registering:", error.message);
        }
    }

    async logout() {
        localStorage.removeItem('token');
        window.location.reload();
    }
    async checkAuthorization() {
        try {
            const token = localStorage.getItem('token')
            const res = await axios.get(`${this.apiURL}/users/check_authorization`, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    }
            })
            return res.data
        } catch (error) {
            console.error('Error during checkAuthorization:', error.message)
            return false
        }
    }
}