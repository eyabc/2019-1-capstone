<template>
	<div class="member-info-wrap" @click=""
	>		<div class="member-info-short">
		<img class="member-info-small-img"src="./default-avatar.png" alt="img" />
		<div class="member-info-desc">
			<h3 class="member-info-nickname">{{myData.nickname}}</h3><hr/>
			<p class="member-info-message">{{myData.profile_message}}</p>
			<p class="member-info-place">{{myData.place}}</p>
		</div>
	</div><br/>
	<ul class="member-info-btn">
		<li><a href="#" @click.prevent="">대기 친구</a></li>
		<li><a href="#" @click.prevent="">대기 그룹</a></li>
		<li><a href="#" @click.prevent="showMap" >위치정보조회</a></li>
		<li><a href="#" @click.prevent="">내 정보 설정</a></li>
	</ul>
	<p></p>

</div>
</template>
<script type="text/javascript">
	import eventBus from '@/eventBus'
	
	export default {
		computed: {
			myData () {
				return this.$store.getters.member
			}
		},
		methods: {
			showMap () {
				const location = { lat:this.myData.lat , lng: this.myData.lng}
				const data = { nickname:this.myData.nickname , place: this.myData.place }
				eventBus.setLocation(location, data)
			},
		}
	}
</script>