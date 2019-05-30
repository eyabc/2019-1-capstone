<template>
	<div class='chat-header'>
		<span class="name" @click="chatContent">{{groupInfo.name}}</span>
		<span class="category">{{categoryName}}</span>
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
				this.$store.commit('current_category', null)
				this.$store.commit('groupComp', {upper: 'chatContent'})
				this.$store.state.group.current_category_name = null
				this.getSocket.emit('current category set', {midx: this.$store.state.member.idx, category: null})
			},
		},
		computed: {
			categoryName () {
				return this.$store.state.group.current_category_name
			},
			getSocket () {
				return this.$store.state.socket
			},
		},
		beforeDestroy () {
			this.$store.commit('current_category_name', null)
			
		},
		async created () {	
		},
		props: ['menuFold']
	}
</script>