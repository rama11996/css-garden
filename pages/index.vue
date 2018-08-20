<template>
<div class="container">
  <Apphead></Apphead>
  <Enlightment></Enlightment>
  <About></About>
</div>  
</template>

<script>
import Apphead from '~/components/app-head.vue'
import Enlightment from '~/components/enlightment.vue'
import About from '~/components/about.vue'
export default {
  components: {
    Apphead,
    Enlightment,
    About
  }
}
</script>
