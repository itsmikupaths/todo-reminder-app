<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      }
    }
  }
</script>

<template>
  <article>
      <div>
        <h3>{{ todo.title }}</h3>
        <i v-if="todo.done" class="check-icon"></i>
      </div>
      <p>{{ todo.description }}</p>
    </article>
</template>

<style scoped>
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