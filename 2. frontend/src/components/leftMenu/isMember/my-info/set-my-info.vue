<template>
  <div class="member-info-wrap" @click="">		
    <ul class="member-info-btn">
      <li><a href="#" @click.prevent=""># 내 정보 수정</a></li>
      <li><a href="#" @click.prevent=""># 공개 설정</a></li>
      <li><a href="#" @click.prevent="back">수정 취소</a></li>
    </ul>
    <form class="member-info-set" method="post" @submit.prevent="setMember">
      <div id="image-set-img">
        <a class="image-set-small-img image-set-img-item " @click="toggleShow" :class="{ none : imgDataUrl !=='' }" >프로필 사진 선택 <br/> jpg/png </a>
        <img class="image-set-small-img img" :src="imgDataUrl" >
        <my-upload field="img" 
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="500"
        :height="500"
        lang-type="en"
        imgBgc="#000"
        img-format="png" ></my-upload>
        <br/><p class="dashed-btn"><a href="#" @click.prevent="initImage">이미지 삭제</a></p>
      </div> 
      <!-- <img class="image-set-small-img"src="./default-avatar.png" alt="img" /> -->
      <div class="member-info-desc re-width">
        <ul class="visibility">
          <li>
            <span>1 : 1 대화 허용</span>
            <span class="checks etrans">
              <input type="checkbox" id="cb1" ref="oneChat" name="visibility_oneChat">
              <label for="cb1"></label>
            </span>
          </li>
          <li>
            <span>위치 공개</span>
            <span class="checks etrans">
              <input type="checkbox" id="cb2" ref="showPlace" name="visibility_place"> 
              <label for="cb2"></label>
            </span>
          </li>
        </ul>
        <ul class="fields">
          <li>
            <label class="input-label">
              <span class="pre"><i class="fas fa-sticky-note"></i></span>
              <input type="text"  name="profile_message" 
              class="full-width" required placeholder="프로필 메세지" v-model="message" ref="message" 
              > 
              <p class="check-show">{{ message }}</p>
            </label>
          </li>
          <li>
            <label class="input-label">
              <span class="pre"><i class="fas fa-envelope"></i></span>
              <input type="text" class="full-width input-disabled" disabled :value="member.email"/>
              <span class="lbl"></span>
              <p class="check-show" ></p>
            </label>
          </li>
          <li>
            <label class="input-label">
              <span class="pre"><i class="fas fa-key"></i></span>
              <input type="password" name="p_password" class="full-width" placeholder="현재 비밀번호를 입력해야 정보를 수정할 수 있습니다." required>
            </label>
          </li>
          <li>
            <label class="input-label">
              <span class="pre"><i class="fas fa-key"></i></span>
              <input type="password" name="n_password" class="full-width" placeholder="새 비밀번호">
            </label>
          </li>
          <li>
            <label class="input-label">
              <span class="pre"><i class="fas fa-key"></i></span>
              <input type="password" name="n_password_re" class="full-width"  placeholder="새 비밀번호 재확인">
            </label>
          </li>
          <li>
            <label class="input-label">
              <span class="pre"><i class="fas fa-user"></i></span>
              <input type="text" name="nickname" class="full-width" required :value="member.nickname">
              <span class="lbl">닉네임</span>
            </label>
          </li>
          <li>
            <label class="input-label">
              <span class="pre"><i class="fas fa-map-marker-alt"></i></span>
              <input type="text"  name="place" ref="place" 
              class="full-width" required placeholder="위치를 입력해주세요" 
              @keydown.enter.prevent="placeSubmit" v-model="place" 
              > 
              <p class="check-show">{{ place }}</p>
            </label>
          </li>
          <input class="login-btn btn" type="submit" value="수정 완료">
        </ul>
      </div>
    </form>
  </div>
</template>
<script type="text/javascript">
import 'babel-polyfill'; // es6 shim
import myUpload from 'vue-image-crop-upload';
import eventBus from '@/eventBus'

export default {
  data() {
    return {
      show: false,
      imgDataUrl: '', // the datebase64 url of created image
      member: this.$store.getters.member,
      place: '',
      message: '',
    }
  },
  components: {
    'my-upload': myUpload
  },
  computed: {
    messages () {
      return this.member.profile_message
    }
  },
  mounted() {
    eventBus.initLocation(this)
    eventBus.initSearchBox(this.$refs.place)
    this.$on('getLocation', location => {
      this.member.lat = location.lat
      this.member.lng = location.lng
    })
      if(this.member.one_chat_available === 1){ 
        this.$refs.oneChat.checked = true
      }  
      if(this.member.place_visibility === 1) {
        this.$refs.showPlace.checked = true
      
}   this.member.profile_img === '' ? this.imgDataUrl = '' : this.member.profile_img  
    this.message = this.member.profile_message
    this.place = this.member.place
  },
  methods: {
    setMember (e) {
      const frm = e.target
      let password = frm.n_password.value
      /* 현재 패스워드와 입력된 현재 패스워드 검사 */
      if (this.member.password !== frm.p_password.value) {
        alert("현재 비밀번호와 일치하지 않습니다.")
        frm.p_password.value = ''
        frm.p_password.focus()
        return 
      } 
      if (frm.n_password.value === '') {
        password = frm.p_password.value
      }
      if (frm.n_password.value !== frm.n_password_re.value) {
        alert("새 비밀번호가 일치하지 않습니다.")
        frm.n_password_re.value = ''
        frm.n_password_re.focus()
        return 
      }
      const data = {
        profile_img: this.imgDataUrl,
        one_chat_available: this.$refs.oneChat.checked*1,
        place_visibility: this.$refs.showPlace.checked*1,
        password:password,
        nickname:frm.nickname.value,
        place:this.place,
        lat:this.member.lat,
        lng:this.member.lng,
        profile_message: this.message
      }
      frm.n_password_re.value = ''
      frm.n_password.value = ''
      this.$store.commit('putMember', data)
    },
    toggleShow () {
      this.show = !this.show;
    },
    initImage () {
      this.imgDataUrl = ''
    },
    back () {
      this.$store.commit('isMember', 'myInfo')
    },
    placeSubmit (e) { this.place=e.target.value },

/**
* crop success
*
* [param] imgDataUrl
* [param] field
*/
cropSuccess(imgDataUrl, field){
  console.log('-------- crop success --------');
  this.imgDataUrl = imgDataUrl;
  console.log(imgDataUrl)
},
/**
* upload success
*	
* [param] jsonData  server api return data, already json encode
* [param] field
*/
cropUploadSuccess(jsonData, field){
  console.log('-------- upload success --------');
  console.log(jsonData);
  console.log('field: ' + field);
},
/**
* upload fail
*
* [param] status    server api return error status, like 500
* [param] field
*/
cropUploadFail(status, field){
  console.log('-------- upload fail --------');
  console.log(status);
  console.log('field: ' + field);
}

}
}
</script>
<style>
.dashed-btn {
  width: 150px;
  margin-left: 10px;
  font-size: 12px;
}
</style>