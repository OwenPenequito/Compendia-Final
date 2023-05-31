import axios from "axios";


export default class CompendiumApi {
    static async View() {
        return axios.get("http://localhost:8000/docuDetails/view");
    }

    static async ViewID() {
        return axios.get("http://localhost:8000/docuDetails/viewID/:ID");
    }

    static async Add() {
        return axios.post("http://localhost:8000/docuDetails/add");
    }

    static async Update(id) {
        return axios.patch("http://localhost:8000/docuDetails/update" + "/id?id=" + id);
    }

    static async Delete(id) {
        return axios.delete("http://localhost:8000/docuDetails/delete" + "/id?id=" +id);
    }

    static async Search(query) {
        return axios.get("http://localhost:8000/docuDetails/search/:query")
    }
}