import axios from "axios";

const instance = axios.create({
    baseURL: "https://weak-ruby-bison-cape.cyclic.app/",
    withCredentials: true,
})

export default instance;