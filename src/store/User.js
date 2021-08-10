import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const api_endpoint = process.env.VUE_APP_API_ENDPOINT || "http://localhost:1337"

export default new Vuex.Store({
    state: {
        data: []
    },

    getters: {
        users: (state) => state.data
    },
    
    mutations: {
        fetch(state, {res}) {
            state.data = res.data
        },
        add(state, {payload}) {
            state.data.push(payload)
        }
    },

    actions: {
        async fetchUser({commit}) {
            let res = await Axios.get(api_endpoint + "/users/" , {
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth-login')).jwt
                }
            })
            console.log('axi ' + res);
            commit("fetch", {res})
        },
        async addHistory({commit}, payload){
            let res = await Axios.post(api_endpoint + "/users", payload)
            console.log('axi ' + res);
            commit("add", {payload})
        },

        async fetchUserByID({commit}, id) {
        let res = await Axios.get(api_endpoint + "/users/" + id ,{
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth-login')).jwt
            }
        })
        console.log('axi ' + res);
        commit("fetch", {res})
    },
},

})