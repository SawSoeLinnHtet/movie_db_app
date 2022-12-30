<template>
  <div class="container-fluid p-0 g-0">
    <nav-bar/>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/Layouts/NavBar.vue"
import Footer from './components/Layouts/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
