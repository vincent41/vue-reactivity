import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [
          { text: "Learn JavaScript", done: false },
          { text: "Voll gut Vue", done: false },
          { text: "Play around in JSFiddle", done: true },
          { text: "Build something awesome", done: true }
        ],
        todo: {},
        showModal: false
    },
   
    mutations: {
        setTodo (state, payload) {
            state.todo = payload
        },
        setShowModal (state, payload) {
            state.showModal = payload
        },
    },
    getters: {
        notes(state) {
            return state.notes
        },
        getTodo(state) {
            return state.todo
        },
        getShowModal(state) {
            return state.showModal
        }
    }
})
