import axios from "axios"

export default class Service {

    login(tcknOrEmail, password) {
        return axios.post(`https://localhost:8080`, {identifier: tcknOrEmail, password: password})
    }

}