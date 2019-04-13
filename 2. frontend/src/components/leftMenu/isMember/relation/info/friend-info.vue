<template>
	<div class="member-info-wrap" @click="">
		<div class="member-info-short ">
			<img class="member-info-small-img"src="./default-avatar.png" alt="img" />
			<div class="member-info-desc">
				<h3 class="member-info-nickname">{{memberData.nickname}}</h3><hr/>
				<p class="member-info-etc">{{ memberData.profile_message }}</p>
				<p class="member-info-etc" v-if="memberData.place_visibility === 1">{{ memberData.place }}</p>
				<p class="member-info-etc">가입 날짜 : {{ memberData.reg_date }}</p>

			</div>
		</div><br/>
		<ul class="member-info-btn">
		<!--	<li><a href="#" @click.prevent="setChat" :class="{ ban : memberData.one_chat_available === 0 }">대화하기</a></li>
			<li><a href="#" @click.prevent="">그룹보기</a></li> -->
			<li><a href="#" @click.prevent="showMap" :class="{ ban : memberData.place_visibility === 0 }">위치정보조회</a></li>
			<li><a href="#" @click.prevent="setFavorite" :class="{ active : memberData.favorite === 1 }">즐겨찾기 {{favorite}}</a></li>
			<li><a href="#" @click.prevent="deleteFriend">친구삭제</a></li>
		</ul>
		<p>{{memberData}}</p>
		
	</div>
</template>
<script type="text/javascript">
	import eventBus from '@/eventBus'

	export default {
		data () {
			return {
				data : {},
			}
		},
		computed: {
			memberData () {
				return this.$store.state.tempData
			},
			favorite () {
				if(this.memberData.favorite === 1) {
					return "해제"
				} else {
					return "추가"
				}
			},

		},
		created() {
			this.$store.dispatch('getFrendInfo')
		},
		methods: {
			deleteFriend () {
				if(confirm("친구목록에서 삭제하시겠습니까?")){
					this.$store.dispatch('deleteFriend', { idx: this.memberData.idx })
					this.$store.commit('tempInit')
					this.$store.commit('isMember', 'relation')
				}
			},
			setFavorite () {
				var data
				this.memberData.favorite === 1 ? data = {favorite: 0} : data = {favorite: 1}
				this.$store.dispatch('setFavorite', data)
			},
			showMap () {
				if(this.memberData.place_visibility === 1){
					const location = { lat:this.memberData.lat , lng: this.memberData.lng}
					const data = { nickname:this.memberData.nickname , place: this.memberData.place }
					eventBus.setLocation(location, data)
				}
			},
			setChat () {
				if(this.memberData.one_chat_available == 1){
					alert('주제의 핵심 기능이 아닙니다. ver2.0 에서 구현예정')
			//		this.$store.commit('isMember', 'chat')
			//		this.$store.commit('compChat', 'groupIn')
		}
	}
}
}
</script>
