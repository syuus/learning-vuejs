import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(e) {
      if (this.newItem === '') return

      let todo = {
        item: this.newItem,
        isDone: false
      }

      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1)
    }
  }
})