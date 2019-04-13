<template>
	<div>
		<div class="profile-wrap" v-for="(item, key) in info">
			<img class="profile-small-img"src="./default-avatar.png" alt="img" />
			<div class="profile-info">
				<p class="profile-nickname">{{ item.nickname }} 
					<span class="profile-message">{{ item.reg_date }}</span>
				</p> 
				<p class="profile-message">{{ item.profile_message }}</p>
			</div>
			<ul class="member-info-btn permit">
				<li><a class="title" @click.prevent="cancel(item.midx, key)">취소</a></li>			
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
			await this.$store.dispatch('getFriendSend')
		},
		methods: {
			/* #158 */
			async cancel(midx, key) {
				if (confirm("친구 요청을 취소 하겠습니까?")) {
					await this.$store.dispatch('refuseFriend', { from: this.$store.state.member.idx, to: midx })
					this.$store.commit('spliceTempData', key)
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
}
</style>