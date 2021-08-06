import Axios from 'axios'
const user = ""

const api_endpoint = process.env.VUE_APP_API_ENDPOINT || "http://localhost:1337"

export default {
    isAuthen(){
        return false
    },

    getUser(){
        return user
    },

    async login({ email, password }){
        try{
            let res
        }catch(e){

        }
    },

    logout(){

    },

    register({ username, email, password }){

    }
}