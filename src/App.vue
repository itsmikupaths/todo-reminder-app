<script>
  export default {
    data: () => {
      return {
        title: "Todo Reminder",
        message: "Hello Vue App",
        logoPath: "./src/assets/images/todo-reminder-logo.png",
      }
    }
  };
</script>

<template>
  <header>
    <img src="" alt="">
    <h2>{{ title }}</h2>
  </header>

  <main>
    {{ message }}
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
</style>
