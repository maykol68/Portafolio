<template>
  <div class="container mx-auto md:px-0">
    <app-header></app-header>
    <app-body></app-body>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppBody from '@/components/layout/AppBody.vue'
export default {
  name: 'App',
  components: { AppHeader, AppBody }
}
</script>
