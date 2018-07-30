<template>
  <div id="app">
    <img style="width: 70px;" src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
    <li v-for="(todo, index) in todos">
      <label>
        <input type="checkbox"
          v-on:change="toggle(todo, index)"
          v-bind:checked="todo.done">

        <del v-if="todo.done">
          {{ todo.text }}
        </del>
        <span v-else>
          {{ todo.text }}
        </span>
        <button @click="openModal(todo, index)">Edit</button>
      </label>
    </li>
  </ul>
  <modal v-if="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
import modal from './components/modal'

export default {

  data () {
    return {
      msg: 'Welcome to Reactivity',
    }
  },
  computed: {
  	todos () {
  		return this.$store.getters.notes
  	},
    showModal () {
      return this.$store.getters.getShowModal
    }
  },
  methods: {
  	toggle (todo) {
    	todo.done = !todo.done
    },
    
    openModal (todo, index) {
      console.log(todo, index)        //Reactivity          <--------------
      console.log(this.todos[index])  //Reactivity          <--------------
      this.$store.commit('setTodo', todo)
      this.$store.commit('setShowModal', true)
    }

  },
  components: {modal},
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
