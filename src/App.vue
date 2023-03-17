<script>
  export default {
    data: () => {
      return {
        title: "Todo Reminder",
        count: 0,
        message: "Hello Vue App",
        logoPath: "./src/assets/images/todo-reminder-logo.png",
        showList: true,
        todos: ["Code", "Eat", "Sleep", "Repeat"],
      }
    },
    methods: {
      toggleTodos() {
        this.showList = !this.showList;
      },
    }
  };
</script>

<template>
  <header>
    <img :src="logoPath" :alt="title">
    <h2>{{ title + `(${ count })` }}</h2>
  </header>

  <main>
    <ul v-if="showList">
      <li v-for="todo in todos">{{ todo }}</li>
    </ul>
  </main>

  <!-- v-on: directive -->
  <button @click="toggleTodos">Toggle Todos</button>
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
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
