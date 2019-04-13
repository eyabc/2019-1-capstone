<template>
	<div class="profile-wrap" @click="goInfo">
		<img class="profile-small-img"src="./default-avatar.png" alt="img" />
		<div class="profile-info">
			<p class="profile-nickname">{{info.nickname}}</p>
			<p class="profile-message">{{info.profile_message}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created() {
			console.log(this.info)
		},
		methods: {
			goInfo () {
				const state = this.$store.state
				this.$store.commit('isMember', 'info')
				if (!this.info.midx) {
					this.$store.commit('info', 'myInfo')
				} else {
					console.log(this.info)
					this.$store.commit('tempData', { idx: this.info.friend})
					this.$store.commit('tempIdx', { index: this.index })
					this.$store.commit('info', 'friendInfo')
			}
		}
	},
	props: ['info', 'index']

}
</script>