<script>
  export default {
    data: () => {
      return {
        title: "Todo Reminder",
        message: "Hello Vue App"
      }
    }
  };
</script>

<template>
  <header>
    <div class="wrapper">
      <h2>{{ title }}</h2>
    </div>
  </header>

  <main>
    {{ message }}
  </main>
</template>

<style scoped>

</style>
