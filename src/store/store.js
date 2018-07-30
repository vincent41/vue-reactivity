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
        todo: {}
    },
    actions: {
        addNote({commit}, note) {
            commit('ADD_NOTE', note)
        }
    },
    mutations: {
        ADD_NOTE(state, note) {
            state.notes.push(note)
        },
        setTodo (state, payload) {
            state.todo = payload
        }
    },
    getters: {
        notes(state) {
            return state.notes
        },
        getTodo(state) {
            console.log(state.todo)
            return state.todo
        }
    }
})
