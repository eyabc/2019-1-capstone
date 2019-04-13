<template>
	<div>
		<div class="profile-wrap" v-for="item in info">
			<img class="profile-small-img"src="./default-avatar.png" alt="img" />
			<div class="profile-info">
				<p class="profile-nickname">{{ item.nickname }} 
					<span class="profile-message">{{ item.reg_date }}</span>
				</p> 
				<p class="profile-message">{{ item.profile_message }}</p>
			</div>
			<ul class="member-info-btn permit">
				<li><a class="title" @click.prevent="accpet(item.midx)">수락</a></li>			
				<li><a class="title" @click.prevent="refuse(item.midx)">거절</a></li>			
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			
		},
		data () {
			return {
			}
		},
		computed: {
			info () {
				return this.$store.state.tempData
			}
		},
		async mounted () {
			await this.$store.dispatch('getFriendReceived')
		},
		methods: {
			/* #158 */
			async accpet(midx) {
				if (confirm("친구 요청을 수락 하겠습니까?")) {
					await this.$store.dispatch('createFriendRelation', {from: this.$store.state.member.idx, to: midx})
					await this.$store.dispatch('getFriendReceived')
				}
			},
			refuse(midx) {
				if (confirm("친구 요청을 거절 하겠습니까?")) {
				//	await this.$store.dispatch('')
				}
			}
		}
	}
</script>
<style type="text/css">
.permit {
	position: absolute;
	display: flex;
	right: 0;
	>li>a {
	}
}
</style>