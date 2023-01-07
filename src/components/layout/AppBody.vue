<template>
  <div>
    <home-presentation></home-presentation>
    <home-projects></home-projects>

  </div>
</template>
<script>
import HomePresentation from '@/components/home/HomePresentation.vue'
import HomeProjects from '@/components/home/HomeProjects.vue'
export default {
  name: 'app-body',
  components: { HomePresentation, HomeProjects }
}
</script>