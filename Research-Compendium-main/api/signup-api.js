import axios from "axios";


export default class SignupAPI {
    static async Signup() {
        return axios.post("http://localhost:8000/profDetails/signup");
    }

    static async StuSignup() {
        return axios.post("http://localhost:8000/stuDetails/signup");
    }
}