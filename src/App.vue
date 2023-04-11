<template>
  <div class="">
    <div class="container mx-auto">
      <app-header></app-header>
    </div>
    <div>
      <app-body></app-body>
    </div>
    <div>
      <app-footer></app-footer>
    </div>
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
