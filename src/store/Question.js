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
        topics: (state) => state.data
    },
    
    mutations: {
        fetch(state, {res}) {
            state.data = res.data
        },
        add(state, {payload}) {
            state.data.push(payload)
        },
        delete(state, {payload}){
            state.data.push(payload)
        }
    }, 

    actions: {
        async fetchQuestion({commit}) {
            let res = await Axios.get(api_endpoint + "/questions")
            console.log('axi ' + res);
            commit("fetch", {res})
        },

        async addQuestion({commit}, payload){
            let res = await Axios.post(api_endpoint + "/questions", payload)
            console.log('axi ' + res);
            commit("add", {payload})
        },

        async deleteQuestion({commit, payload}){
            let res = await Axios.post(api_endpoint + "/questions", payload)
            console.log('axi ' + res);
            commit("add", {payload})
        }
    },
})