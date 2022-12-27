<template>
  <div class="container-fluid p-0 g-0 position-relative">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "./components/Layouts/NavBar.vue"

export default {
  components: {
    NavBar
  }
}
</script>
