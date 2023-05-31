import axios from "axios";

export default class LoginApi {
    static async Login() {
        return axios.post("http://localhost:8000/profDetails/login");
    }

    static async StuLogin() {
        return axios.post("http://localhost:8000/stuDetails/login");
    }
}