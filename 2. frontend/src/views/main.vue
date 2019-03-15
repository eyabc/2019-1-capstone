<template>
  <div class="site-wrap">
    <siteHeader />
    <div class="container">
      <div class="container-innner">
        <router-view></router-view>
      </div>
    </div>
    <siteFooter />
    <leftMenu />
  </div>
</template>
<script>
  import siteHeader from '@/components/header'
  import siteFooter from '@/components/footer'
  import leftMenu from '@/components/leftMenu/leftMenu'
  export default {
    components: {
      siteHeader, 
      siteFooter,
      leftMenu,
    }
  }
</script>