<template>
	<div class="profile-wrap" @click="moveGroup">
		<img class="profile-small-img"src="./default-avatar.png" alt="img" />
		<div class="profile-info">
			<p class="profile-nickname">{{info.name}}</p>
			<p class="profile-message">{{info.description}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['info', 'index'],
		methods: {
			moveGroup () {
				this.$store.commit('isMember', 'activity')
				this.$store.commit('activity', 'group')
			}
		}
	}
</script>