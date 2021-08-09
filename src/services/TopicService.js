import Axios from "axios"

const auth_key = 'auth-start'
let auth = JSON.parse(localStorage.getItem(auth_key))
const topicTitle = auth ? auth.topicTitle: ""

const api_endpoint = process.env.VUE_APP_API_ENDPOINT || "http://localhost:1337"

export default{
    getTopic(){
        return topicTitle
    },

    async startQuiz( topicTitle ){
        try {
            let url = api_endpoint + '/auth/local'
            let body = {
                title: topicTitle
            }
            console.log(body);
            let res = await Axios.post(url, body)
            localStorage.setItem(auth_key, res.data)
        }catch(e){
            console.error(e.response);
        }
    }
}