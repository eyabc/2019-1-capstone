<template>
  <div class="site-wrap">
    <leftMenu :leftFold="leftFold"/>
    <div class="contents-wrap" :class="{'active' : !leftFold}">
      <siteHeader />
      <div class="container">
        <div class="container-innner">
          <router-view></router-view>
        </div>
      </div>
      <siteFooter />
    </div>
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
    },
    data () {
      return {
        leftFold: false,
        rightFold: false,
      }
    },
    methods: {

    }
  }
</script>