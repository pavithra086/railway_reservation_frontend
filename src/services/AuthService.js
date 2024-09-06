import axios from 'axios'

import httpClient from "../http-common";

const API_URL = "http://localhost:8097/PASSENGER-MANAGEMENT-SERVICE/user/auth/";

class AuthService{
    
    signup(userName, password, email, phone) {
        return axios.post(API_URL +"signup", {
            userName,
            password,
            email,
            phone
           
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();