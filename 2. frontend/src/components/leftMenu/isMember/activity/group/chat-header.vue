<template>
	<div class='chat-header'>
		<span class="name" @click="chatContent">{{groupInfo.name}}</span>
		<span class="category">카테고리 이름(구현 전)</span>
		<span class="menu-icon" @click="setFolding(!menuFold)"><i class="fas fa-bars"></i></span>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				groupInfo: this.$store.state.groupInfo
			}
		},
		methods: {
			setFolding(val) {
				this.$parent.menuFold = val
			},
			chatContent () {
				this.$store.commit('groupComp', {upper: 'chatContent'})
			}
		},
		created() {
		},
		props: ['menuFold']
	}
</script>