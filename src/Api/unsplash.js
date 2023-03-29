import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID AAfG_SibNM1h5R1BCzs0CcWqIGlstr2BAvvBR1J5T78'
    }
})