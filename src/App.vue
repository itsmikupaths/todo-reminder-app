<script>
  import Todo from './components/todo.vue';
  import TodoForm from './components/todo-form.vue';

  export default {
    components: {
      Todo,
      TodoForm,
    },
    data: () => {
      return {
        name: "Todo Reminder",
        count: 0,
        logoPath: "./src/assets/images/todo-reminder-logo.png",
        todos: [
          { title: "Meeting with John", description: "To discuss the next step on the project.", done: true },
          { title: "Create pull request", description: "For code review and testing purposes.", done: false },
          { title: "Early clock-out", description: "Personal errand.", done: false }
        ]
      }
    },
    computed: {
      title() {
        return `${this.name} (${this.count})`;
      },
    },
    methods: {
      toggleTodos() {
        this.showList = !this.showList;
      },
      updateDone(index) {
        this.todos[index].done = true;
      }
    }
  };
</script>

<template>
  <header>
    <img :src="logoPath" :alt="title">
    <h2>{{ title }}</h2>
  </header>

  <main>
    <Todo v-for="(todo, index) in todos" :todo="todo"
      :index="index"
      :key="index"
      @mark-as-done="updateDone"></Todo>
  </main>

  <TodoForm></TodoForm>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 2px solid grey;
  }
  img {
    width: 44px;
    aspect-ratio: 1/1;
  }
  main {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 8px;
    width: 100%;
  }
</style>
