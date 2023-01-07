<template>
<div class="container mx-auto md:px-0">
  <app-header></app-header>
  <!-- <font-awesome-icon :icon="['fas', 'user']" /> -->
</div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  name: 'App',
  components: { AppHeader }
}
</script>
