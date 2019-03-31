<template>
	<div class="friend-info-wrap" @click="">
		<div class="friend-info-short">
			<img class="friend-info-small-img"src="./default-avatar.png" alt="img" />
			<div class="friend-info-desc">
				<h3 class="friend-info-nickname">{{memberData.nickname}}</h3><hr/>
				<p class="friend-info-message">{{ memberData.profile_message }}</p>
				<p class="friend-info-place" v-if="memberData.place_visibility === 0">{{ memberData.place }}</p>
			</div>
		</div><br/>
		<ul class="friend-info-btn">
			<li><a href="#" @click.prevent="">대화하기</a></li>
			<li><a href="#" @click.prevent="">그룹보기</a></li>
			<li><a href="#" @click.prevent="showMap">위치정보조회</a></li>
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
				return this.$store.getters.tempData
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
			this.$store.commit('getFrendInfo')
		},
		methods: {
			deleteFriend () {
				if(confirm("친구목록에서 삭제하시겠습니까?")){
					this.$store.commit('deleteFriend')
					this.$store.commit('isMember', 'friends')
				}
			},
			setFavorite () {
				var data
				this.memberData.favorite === 1 ? data = {favorite: 0} : data = {favorite: 1}
				this.$store.commit('setFavorite', data)
			},
			showMap () {
				const location = { lat:this.memberData.lat , lng: this.memberData.lng}
				const data = { nickname:this.memberData.nickname , place: this.memberData.place }
				eventBus.setLocation(location, data)
			}
		}
	}
</script>
