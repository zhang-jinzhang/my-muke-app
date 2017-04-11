<template>
  <div class="home-wrapper">
     <HeaderBar></HeaderBar>
     <SliderBar></SliderBar>
     <NavBar></NavBar>
     <ActualBar></ActualBar>
     <FreeCourse></FreeCourse>
     <FrontEnd></FrontEnd>
     <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/header.vue'
import SliderBar from '@/components/home/slider.vue'
import NavBar from '@/components/home/nav.vue'
import ActualBar from '@/components/home/actual_combat.vue'
import FreeCourse from '@/components/home/free_course.vue'
import FrontEnd from '@/components/home/frontend.vue'
import FooterBar from '@/components/footer.vue'
export default {
  name: 'form',
  components: {
   HeaderBar,
   SliderBar,
   NavBar,
   ActualBar,
   FreeCourse,
   FrontEnd,
   FooterBar
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  scope>
  .clear{
    clear: both;
  }
 
</style>
