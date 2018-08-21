<template>
<div class="container">
  <Apphead></Apphead>
  <Enlightment></Enlightment>
  <About></About>
  <Participation></Participation>
  <Benefits></Benefits>
  <Requirements></Requirements>
  <Archives></Archives>
  <Designs></Designs>
  <Resources></Resources>
  <Appfoot></Appfoot>
</div>  
</template>

<script>
import Apphead from '~/components/app-head.vue'
import Enlightment from '~/components/enlightment.vue'
import About from '~/components/about.vue'
import Participation from '~/components/participation.vue'
import Benefits from '~/components/benefits.vue'
import Requirements from '~/components/requirements.vue' 
import Appfoot from '~/components/app-foot.vue'
import Archives from '~/components/archives.vue'
import Designs from '~/components/designs.vue'
import Resources from '~/components/resources.vue'
export default {
  components: {
    Apphead,
    Enlightment,
    About,
    Participation,
    Benefits,
    Requirements,
    Appfoot,
    Archives,
    Designs,
    Resources
  }
}
</script>
<style lang="sass" scoped>
 div.container
  background: url("http://www.csszengarden.com/179/background.gif")
 
</style>

