<template>
  <div>
    <home-presentation></home-presentation>
    <home-about-me></home-about-me> 
    <home-projects></home-projects>
  </div>
</template>
<script>
import HomePresentation from '@/components/home/HomePresentation.vue'
import HomeProjects from '@/components/home/HomeProjects.vue'
import HomeAboutMe from '@/components/home/HomeAboutMe.vue'
export default {
  name: 'app-body',
  components: { HomePresentation, HomeProjects, HomeAboutMe }
}
</script>
