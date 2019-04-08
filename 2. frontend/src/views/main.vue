<template>
  <div class="site-wrap">
    <leftMenu :leftFold="leftFold"/>
    <div class="contents-wrap"
    :style="{
      'margin-left': !leftFold ? -$store.state.leftMenuWidth + 'px' : 0
    }">
    <siteHeader />
    <div class="container">
      <GoogleMapLoader />
    </div>
    <siteFooter />
  </div>
</div>
</template>
<script>
  import siteHeader from '@/components/header'
  import siteFooter from '@/components/footer'
  import leftMenu from '@/components/leftMenu/leftMenu'
  import GoogleMapLoader from '@/components/map/GoogleMapLoader'
  
  export default {
    components: {
      siteHeader, 
      siteFooter,
      leftMenu,
      GoogleMapLoader,
    },
    async created() {
       // var member = await this.$fetch('/api');
       // this.$store.commit('member', member);
       this.setLeftMenu()
       this.$store.commit('leftMenuWidth', this.$store.state.member ? 700 : 500)
    },
    data () {
      return {
        leftFold: false,
      }
    },
    methods: {
      setLeftMenu() {
        let component
  
        this.$store.state.member === null ? component = 'login' : component = 'isMember'
        this.$store.commit('leftMenu', component)

      }
    }
  }
</script>