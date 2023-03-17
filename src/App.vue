<script>
  export default {
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
    }
  };
</script>

<template>
  <header>
    <img :src="logoPath" :alt="title">
    <h2>{{ title }}</h2>
  </header>

  <main>
    <article v-for="(todo, index) in todos" :key="index">
      <div>
        <h3>{{ todo.title }}</h3>
        <i v-if="todo.done" class="check-icon"></i>
      </div>
      <p>{{ todo.description }}</p>
    </article>
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 8px;
    width: 100%;
  }

  /* article */
  article {
    padding: 10px 5px;
    border-radius: 5px;
    border: 1px solid rgb(224, 224, 224);
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2),
                0 3px 5px rgba(0, 0, 0, 0.2);
  }
  article div {
    position: relative;
  }
  article div h3 {
    border-bottom: 1px solid grey;
    font-size: 22px;
  }
  article p {
    margin-top: 5px;
  }
  i.check-icon {
    border-right: 4px solid green;
    border-bottom: 4px solid green;
    position: absolute;
    top: 0;
    right: 10px;
    width: 7px;
    height: 14px;
    transform: translateY (50%);
    rotate: 45deg;
    transform-origin: left bottom;
  }
</style>
