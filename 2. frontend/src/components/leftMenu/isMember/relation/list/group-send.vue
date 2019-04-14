<template>
	<div>
		<div class="profile-wrap" v-for="(item, key) in info">
			<img class="profile-small-img"src="./default-avatar.png" alt="img" />
			<div class="profile-info">
				<p class="profile-nickname">{{ item.name }} </p> 
				<p class="profile-message">{{ item.description }}</p>
			</div>
			<ul class="member-info-btn permit">
				<li><a class="title" @click.prevent="cancel(item.cgidx, key)">요청 취소</a></li>			
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		computed: {
			info () {
				return this.$store.state.group
			}
		},
		async mounted () {
			await this.$store.dispatch('getGroups', { request: 2 })
		},
		methods: {
			async cancel(cgidx, key) {
				if (confirm("그룹 참여 요청을 취소하시겠습니까?")) {
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
}
</style>