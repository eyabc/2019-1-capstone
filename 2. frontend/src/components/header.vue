<!-- #26 -->
<template>
  <div class="site-header">
    <h3 class="logo"><router-link to="/"></router-link></h3>
    <div class="header-search-bar">
      <form @submit.prevent="search">
        <input type="text" id="pac-input" name="place" placeholder="위치를 입력해주세요">
        <input type="text" name="name" placeholder="그룹 이름으로 검색">
        <input type="text" name="description" placeholder="그룹 설명으로 검색">
        <span class="checks etrans place-check">
          <input type="checkbox" id="cb1" ref="oneChat" name="visibility_oneChat">
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
      search(){
      }
    }
  }
</script>
