import axios from "axios";

function post(URL, configs = undefined, data){
    return axios.post(URL, configs, data)
}

export default post