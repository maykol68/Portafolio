<template>
  <div class="container mx-auto md:px-0">
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppBody from '@/components/layout/AppBody.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
export default {
  name: 'App',
  components: { AppHeader, AppBody, AppFooter }
}
</script>
