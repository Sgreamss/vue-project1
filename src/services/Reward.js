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
        rewards: (state) => state.data
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
        async fetchReward({commit}) {
            let res = await Axios.get(api_endpoint + "/rewards/")
            console.log('axi ' + res);
            commit("fetch", {res})
        },

        async addReward({commit}, payload){
            let res = await Axios.post(api_endpoint + "/rewards/", payload)
            console.log('axi ' + res);
            commit("add", {payload})
        }
    },
})