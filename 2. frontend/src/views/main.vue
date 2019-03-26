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
        this.$store.commit('setLeftMenuWidth', this.$store.getters.member ? 800 : 500)
    },
    data () {
      return {
        leftFold: false,
      }
    },
    methods: {
      async setLeftMenu() {
        if(this.$store.getters.member === null) {
          this.$store.commit('leftMenu', 'login')
        }

      }
    }
  }
</script>