<template>
  <div class="site-wrap">
    <leftMenu :leftFold="leftFold"/>
    <div class="contents-wrap" :class="{'active' : !leftFold}">
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
    },
    data () {
      return {
        leftFold: false,
      }
    },
    methods: {
      async setLeftMenu() {
        if(this.$store.getters.member === null) {
          this.$store.commit('leftMenu', 'notMember')
          console.log(this.$store.state.leftMenu)
        }

      }
    }
  }
</script>