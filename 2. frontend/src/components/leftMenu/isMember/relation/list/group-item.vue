<template>
	<div class="profile-wrap" @click="moveGroup">
		<img class="profile-small-img"src="./default-avatar.png" alt="img" />
		<div class="profile-info">
			<p class="profile-nickname">{{info.name}}</p>
			<p class="profile-message">{{info.description}}</p>
		</div>
	</div>
</template>
<script src="/socket.io/socket.io.js"></script>

<script type="text/javascript">
	export default {
		props: ['info', 'index'],
		methods: {
			async moveGroup () {
				var room = this.info.cgidx
				await this.$store.dispatch('getGroupInfo', {cgidx: room})
				await this.$store.dispatch('getGroupMemberRelation', {commit: 'myGroupRelation'})
				this.$store.commit('isMember', 'activity')
				this.$store.commit('activity', 'group')
				this.$store.commit('groupComp', {upper: 'chatContent'})

			}
		}
	}
</script>