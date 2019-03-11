<template>
  <div class="site-wrap">
    <siteHeader />
    <div class="container">
      <div class="container-innner">
        <router-view></router-view>
      </div>
    </div>
    <router-view class="leftAside" name="leftAside" />
    <router-view class="rightAside" name="rightAside"/>
    <siteFooter />
  </div>
</template>
<script>
  import siteHeader from '@/components/header'
  import siteFooter from '@/components/footer'
  export default {
    components: {
      siteHeader, 
      siteFooter,
    }
  }
</script>