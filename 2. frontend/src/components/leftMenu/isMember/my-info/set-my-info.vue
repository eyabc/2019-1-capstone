<template>
	<div class="member-info-wrap" @click="">		
		<form class="member-info-short">
			<div id="image-set-img">
				<a class="image-set-small-img image-set-img-item " @click="toggleShow" :class="{ none : imgDataUrl !=='' }" >프로필 사진 선택 <br/> jpg/png </a>
				<img class="image-set-small-img " :src="imgDataUrl" >
				<my-upload field="img" 
				@crop-success="cropSuccess"
				@crop-upload-success="cropUploadSuccess"
				@crop-upload-fail="cropUploadFail"
				v-model="show"
				:width="400"
				:height="400"
				lang-type="en"
				imgBgc="#000"
				img-format="png" ></my-upload>
			</div>
			<!-- <img class="image-set-small-img"src="./default-avatar.png" alt="img" /> -->
			<div class="member-info-desc">
				<h3 class="member-info-nickname">fdfd</h3><hr/>
				<p class="member-info-message"></p>
				<p class="member-info-place"></p>
			</div>
		</form><br/>
		<ul class="member-info-btn">
			<li><a href="#" @click.prevent="">대기 친구</a></li>
			<li><a href="#" @click.prevent="">대기 그룹</a></li>
			<li><a href="#" @click.prevent="" >위치정보조회</a></li>
			<li><a href="#" @click.prevent="">내 정보 설정</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import 'babel-polyfill'; // es6 shim
	import myUpload from 'vue-image-crop-upload';

	export default {
		data() {
			return {
				show: false,
				imgDataUrl: '' // the datebase64 url of created image
			}
		},
		components: {
			'my-upload': myUpload
		},
		methods: {
			toggleShow() {
				this.show = !this.show;
			},
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