<template>
  <div data-test="todo">
      <div v-for="(todo,index) in todos" :key="index">{{todo.text}}</div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',

  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        }
      ]
    }
  }
}
</script>