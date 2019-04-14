<template>
	<div>
		<div class="profile-wrap" v-for="(item, key) in info">
			<img class="profile-small-img"src="./default-avatar.png" alt="img" />
			<div class="profile-info">
				<p class="profile-nickname">{{ item.name }} </p> 
				<p class="profile-message">{{ item.description }}</p>
			</div>
			<ul class="member-info-btn permit">
				<li><a class="title" @click.prevent="accpet(item.midx, key)">수락</a></li>			
				<li><a class="title" @click.prevent="refuse(item.midx, key)">거절</a></li>			
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
				return this.$store.state.group
			}
		},
		async mounted () {
			await this.$store.dispatch('getGroups', { request: 2 })
		},
		methods: {
			/* #158 */
			async accpet(midx, key) {
				if (confirm("친구 요청을 수락 하겠습니까?")) {
					await this.$store.dispatch('createFriendRelation', {from: this.$store.state.member.idx, to: midx})
					this.$store.commit('spliceTempData', key)
				}
			},
			async refuse(midx, key) {
				if (confirm("친구 요청을 거절 하겠습니까?")) {
					await this.$store.dispatch('refuseFriend', { to: this.$store.state.member.idx, from: midx })
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
	>li>a {
	}
}
</style>