import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c55ead2254dc4809aac79edf8e4ceddc'
    }
})