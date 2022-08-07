import axios from "axios";

export async function getData() {
    return await axios({
        method: 'get',
        url: 'https://api.jsonbin.io/v3/b/62ea5f481c7f436f211de6ef'
    })
}