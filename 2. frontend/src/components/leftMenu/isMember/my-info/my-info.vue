<template>
	<div class="member-info-wrap fixed" @click="">		
		<div class="member-info-short">
		<img class="member-info-small-img"src="./default-avatar.png" alt="img" />
		<div class="member-info-desc">
			<h3 class="member-info-nickname">{{myData.nickname}}</h3><hr/>
			<p class="member-info-message">{{myData.profile_message}}</p>
			<p class="member-info-etc">{{myData.place}}</p>
			<p class="member-info-etc">가입 날짜 : {{myData.reg_date}}</p>
		</div>
	</div><br/>
	<ul class="member-info-btn fixed">
		<li><a href="#" @click.prevent="showMap" >위치정보조회</a></li>
		<li><a href="#" @click.prevent="setMyinfo">내 정보 설정</a></li>
	</ul>
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
			setMyinfo () {
				this.$store.commit('isMember', 'setMyInfo')
			}
		}
	}
</script>