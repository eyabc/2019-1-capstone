<template>
	<div>
		<div class="profile-wrap" v-for="(item, key) in info">
			<img class="profile-small-img"src="./default-avatar.png" alt="img" />
			<div class="profile-info">
				<p class="profile-nickname">{{ item.name }} </p> 
				<p class="profile-message">{{ item.description }}</p>
			</div>
			<ul class="member-info-btn permit">
				<li><a class="title" @click.prevent="accpet(item.cgidx, key)">수락</a></li>		
				<li><a class="title" @click.prevent="refuse(item.cgidx, key)">거절</a></li>
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
			await this.$store.dispatch('getGroups', { request: 1 })

		},
		methods: {
			/* #158 */
			async accpet(cgidx, key) {
				if (confirm("그룹에 참여하시겠습니까?")) {
					await this.$store.dispatch('putRequest', { request: 0, midx: this.$store.state.member.idx, cgidx: cgidx})
					this.$store.commit('spliceGroup', key)
				}
			},
			async refuse(cgidx, key) {
				if (confirm("그룹 초대를 거절하시겠습니까?")) {
					await this.$store.dispatch('deleteGroupParticipant', { midx: this.$store.state.member.idx, cgidx: cgidx })
					this.$store.commit('spliceGroup', key)
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