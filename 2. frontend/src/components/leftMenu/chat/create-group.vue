<template>
	<div class="create-group">
		<ul class="member-info-btn">
			<li><a href="#"># 새 그룹 추가</a></li>
		</ul>
		<form class="member-info-set" method="post" @submit.prevent="setMember">
			<div id="image-set-img">
				<a class="image-set-small-img image-set-img-item " @click="toggleShow" :class="{ none : data.imgDataUrl !=='' }" >그룹 대표 사진 선택 <br/> jpg/png </a>
				<img class="image-set-small-img img" :src="data.imgDataUrl" >
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
			<div class="member-info-desc re-width">

				<ul class="fields">
					<li>
						<label class="input-label">
							<span class="pre"><i class="fas fa-tag"></i></span>
							<input type="text"  name="groupName" 
							class="full-width" required placeholder="그룹 이름"> 
						</label>
					</li>
					<li>
						<label class="input-label">
							<span class="pre"><i class="fas fa-sticky-note"></i></span>
							<textarea name="description" class="full-width" placeholder="그룹 설명"></textarea>
						</label>
					</li>
					<li>
						<div class="group-visibility">
							<label>공개 여부</label>
							<span class="dashed-btn width1" :class="{active:data.visibility===1}"><a href="#" ref="public" @click.prevent="setData('visibility',1)">전체 공개</a></span>
							<span class="dashed-btn width1" :class="{active:data.visibility===2}"><a href="#" ref="private"  @click.prevent="setData('visibility',2)">친구 공개</a></span><br/>
						</div> 
						<label class="group-friend-search" v-if="data.visibility===2">
							<input type="text" name="friends" class="full-width" placeholder="친구 검색">
						</label>
					</li>
					<li>
						<label class="input-label">
							<span class="pre"><i class="fas fa-users-cog"></i></span>
							<input type="text" name="nickname" class="full-width" required>
							<span class="lbl">관리자</span>
						</label>
					</li>
					<li>
						<div class="group-visibility">
							<label>참여자 초기 권한</label>
							<span class="dashed-btn width1" :class="{active:data.authority===1}"><a href="#" ref="public" @click.prevent="setData('authority',1)">읽기</a></span>
							<span class="dashed-btn width1" :class="{active:data.authority===2}"><a href="#" ref="private" @click.prevent="setData('authority',2)"">읽기/쓰기</a></span><br/>
							<span class="dashed-btn width1" :class="{active:data.permission===1}"><a href="#" ref="private" @click.prevent="setData('permission',1)" >참여 허가 필요</a></span><br/>
							</div> 
							</li>
							<li>
							<label class="input-label">
								<span class="pre"><i class="fas fa-key"></i></span>
								<input type="text" name="n_password" class="full-width" placeholder="비밀번호">
							</label>
						</li>


						<li>
							<label class="input-label">
								<span class="pre"><i class="fas fa-map-marker-alt"></i></span>
								<input type="text"  name="place" ref="place" 
								class="full-width" required placeholder="위치를 입력해주세요" 
								@keydown.enter.prevent="placeSubmit" v-model="data.place" 
								> 
								<p class="check-show">{{ data.place }}</p>
							</label>
						</li>
						<li>
							<label class="input-label">
								<span class="pre"><i class="fas fa-hashtag"></i></span>
								<input type="text" name="nickname" class="full-width" required>
								<span class="lbl">검색 태그</span>
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
			data: {
				visibility: 0,
				authority: 0,
				permission: 0,
      			imgDataUrl: '', // the datebase64 url of created image
      			place: '',
      			lat: '',
      			lng: '',
   			   },
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
		this.data.lat = location.lat
		this.data.lng = location.lng
	})
},
methods: {
	setData (data, num) {
		this.data[data] = num === this.data[data] ? 0 : num
	},
	toggleShow () {
		this.show = !this.show;
	},
	initImage () {
		this.data.imgDataUrl = ''
	},
	placeSubmit (e) { this.data.place=e.target.value },

/**
* crop success
*
* [param] imgDataUrl
* [param] field
*/
cropSuccess(imgDataUrl, field){
	console.log('-------- crop success --------');
	this.data.imgDataUrl = imgDataUrl;
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
.width1 {
	width: 110px;
}
</style>