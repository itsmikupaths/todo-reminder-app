<script>
  export default {
    name: "App"
  }
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <br>  
    <a href="/about">About</a>
  </nav>
  <RouterView></RouterView>
</template>