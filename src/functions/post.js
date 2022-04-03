import axios from "axios";

function post(URL, data = undefined, configs){
    return axios.post(URL, data, configs)
}

export default post