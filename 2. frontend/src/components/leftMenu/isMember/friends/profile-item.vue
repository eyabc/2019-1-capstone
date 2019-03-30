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
		methods: {
			goInfo () {
				if (!this.info.midx) {
					this.$store.commit("isMember", 'myInfo')
				} else {
					this.$store.state.tempData = this.info.friend
					this.$store.commit("isMember", 'friendInfo')

			}
		}
	},
	props: ['info', 'index']

}
</script>