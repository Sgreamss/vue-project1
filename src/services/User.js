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
        }
    },

    actions: {
        async fetchUser({commit}) {
            let res = await Axios.get(api_endpoint + "/users")
            console.log('axi ' + res);
            commit("fetch", {res})
        }

    },
})