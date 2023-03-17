<script>
  export default {
    emits: ["save-form-data"],
    data() {
      return {
        show: false,
        formData: {
          title: '',
          description: '',
          done: false,
        }
      }
    },
    methods: {
      toggleForm() {
        this.show = !this.show;
      },
      saveForm() {
        if(this.formData.title === "" || this.formData.description === "") return;

        this.$emit("save-form-data", this.formData);
        this.formData = {
          title: '',
          description: '',
          done: false,
        }
        this.toggleForm();
      }
    }
  }
</script>

<template>
  <div class="form-container">
    <form v-show="show" @submit.prevent >
      <span>Create Reminder</span>
      <div class="form-input">
        <label for="title">Title</label>
        <input type="text" name="tile" v-model="formData.title" />
      </div>
      <div class="form-input">
        <label for="description">Description</label>
        <textarea name="description" v-model="formData.description"></textarea>
      </div>
      <div class="form-input form-group">
        <input type="submit"
               value="Submit"
               @click="saveForm" />
        <input type="button"
               value="Cancel"
               @click="toggleForm" />
      </div>
    </form>
    <div v-show="!show" class="show-form-btn-cont">
      <button @click="toggleForm">Create Reminder</button>
    </div>
  </div>
</template>

<style scoped>
  div.form-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    width: calc(100% - 20px);
    padding: 2px;
    border-radius: 5px;
    border: 1px solid rgb(224, 224, 224);
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2),
                0 3px 5px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
  form {
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  .form-input {
    display: flex;
    flex-direction: column;
  }
  .form-input.form-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }
  input[type="submit"], input[type="button"] {
    width: 200px;
    min-width: 200px;
    align-self: center;
  }
  textarea {
    resize: vertical;
    min-height: 80px;
  }
  .show-form-btn-cont {
    display: flex;
    justify-content: center;
  }
</style>