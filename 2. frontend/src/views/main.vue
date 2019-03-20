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
    async created() {
        var  session = await this.$fetch('/api');
        console.log(session)
    },
    data () {
      return {
        leftFold: false,
        rightFold: false,
      }
    },
    methods: {
      async setLeftMenu() {


      }
    }
  }
</script>