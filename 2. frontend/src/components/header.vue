<!-- #26 -->
<template>
  <div class="site-header">
    <h3 class="logo"></h3>
    <div class="header-search-bar">
      <form @submit.prevent="search">
        <input type="text" id="pac-input" name="place" placeholder="위치를 입력해주세요">
        <input type="text" name="name" placeholder="그룹 이름으로 검색">
        <input type="text" name="description" placeholder="그룹 설명으로 검색">
        <span class="checks etrans place-check">
          <input type="checkbox" id="cb1" ref="thisplace" name="visibility_oneChat">
          <label for="cb1">현재 범위에서 검색</label>
        </span>
        <input type="submit">
        <!-- <span @mousedown="hoverToggle" class="search-plus-icon"><i class="fas fa-pencil-alt"></i></span> -->
<!--         <div class="header-search-plus" v-if="hover" >
          <p><input type="text" name="theme" placeholder="검색할 주제"></p>
        </div> -->
      </form>
    </div>
  </div>
</template>
<script type="text/javascript">
  import eventBus from '@/eventBus'
  import $fetch from '@//middleware/fetch'

  export default {
    data() {
      return {
        hover: false,
      }
    },
    methods: {
      // hoverToggle () {    
      //   this.hover = !this.hover
      // },

      async search(e){
        const frm = e.target
        let data = {
          name: frm.name.value,
          description: frm.description.value,
          url: '',
        }
        data.url = `/api/search-group?&name=${data.name}&description=${data.description}`
        
        if (this.$refs.thisplace.checked === true) {
          data.place = frm.place.value;
          data.url = data.url + `&lat=${data.lat}&lng=${data.lng}`
        }
        this.$store.dispatch('getSearchedGroup', data)
        // const jsonData = this.$store.state.mapSearchList[0]
        // const location = { lat:jsonData.lat , lng: jsonData.lng}
        // const datas = { nickname:jsonData.name , place: jsonData.place }
        // eventBus.setLocation(location, datas)
},
}
}
</script>
