<template>
	<div class="friend-info-wrap" @click="">
		<div class="friend-info-short">
			<img class="friend-info-small-img"src="./default-avatar.png" alt="img" />
			<div class="friend-info-desc">
				<h3 class="friend-info-nickname">{{memberData.nickname}}</h3><hr/>
				<p class="friend-info-message">{{ memberData.profile_message }}</p>
				<p class="friend-info-place" v-if="memberData.place_visibility === 0">{{ memberData.place }}</p>
				<p>{{memberData}}</p>
			</div>
		</div><br/>
		<ul class="friend-info-btn">
			<li><a href="#" @click.prevent="">대화하기</a></li>
			<li><a href="#" @click.prevent="">그룹보기</a></li>
			<li><a href="#" @click.prevent="">위치정보조회</a></li>
			<li><a href="#" @click.prevent="">즐겨찾기 추가</a></li>
			<li><a href="#" @click.prevent="deleteFriend">친구삭제</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				data : {},
				favorite: "추가"
			}
		},
		computed: {
			memberData () {
				return this.$store.getters.tempData
			}
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
			}
		}
	}
</script>
