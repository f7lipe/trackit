import axios from "axios";

function get(URL, configs = undefined){
    return axios.get(URL, configs)
}

export default get