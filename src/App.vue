<script>
  export default {
    data: () => {
      return {
        title: "Todo Reminder",
        message: "Hello Vue App",
        logoPath: "./src/assets/images/todo-reminder-logo.png",
        showList: true,
        todos: ["Code", "Eat", "Sleep", "Repeat"],
      }
    }
  };
</script>

<template>
  <header>
    <!-- v-bind: directive -->
    <img :src="logoPath" :alt="title">
    <h2>{{ title }}</h2>
  </header>

  <main>
    <!-- v-if directive -->
    <ul v-if="showList">
      <li></li>
    </ul>
  </main>
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
