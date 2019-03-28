<template>
	<div class="profile-wrap">
		<img class="profile-small-img"src="./default-avatar.png" alt="img" />
		<div class="profile-info">
			<p class="profile-nickname">{{info.nickname}}</p>
			<p class="profile-message">{{info.profile_message}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ['info', 'index']
	}
</script>