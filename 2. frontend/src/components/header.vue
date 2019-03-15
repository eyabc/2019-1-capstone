<!-- #26 -->
<template>
  <div class="site-header">
    <div>
      <router-link to="/"><img class="site-logo" src="../assets/image/Logo.png" alt='Logo'></router-link>
    </div>
    <div class="header-search-bar">
      <form @submit.prevent="search">
        <input type="text" name="place" placeholder="위치를 입력해주세요">
        <div class="header-search-plus" v-if="hover" >
          <p><input type="" name="nameInplace" placeholder="현재 위치에서 검색할 그룹 이름"></p>
          <p><input type="" name="nameAll" placeholder="검색할 그룹 이름"></p>
          <p><input type="" name="theme" placeholder="검색할 주제"></p>
        </div>
        <input type="submit" name="">
      </form>
      <span @mouseover="hover = true" @mousedown="hoverToggle" class="search-plus-icon"><i class="fas fa-pencil-alt"></i></span>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    hoverToggle () {
      this.hover = !this.hover
    },
    search(){

    }
  }
}
</script>
