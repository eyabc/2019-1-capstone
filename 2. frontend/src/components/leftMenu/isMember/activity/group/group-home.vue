<template>
	<div class="group-wrap">
		<chatMenu :menuFold="menuFold"/>
		<chatHeader :menuFold="menuFold"/>
		<chatContent :menuFold="menuFold" />
		<chatFooter />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			chatFooter: () => import('./chat-footer'),
			chatContent: () => import('./chat-content'),
			chatMenu: () => import('./chat-menu'),
			chatHeader: () => import('./chat-header'),
		},
		data () {
		return {
				component: '',
				groupInfo: this.$store.state.groupInfo,
				menuFold: false,
			}
		},
		computed: {
			getSocket () {
				return this.$store.state.socket
			}
		},	
		created () {
			this.getSocket.emit('exit_room', {room: this.groupInfo.idx})
			this.getSocket.emit('join_room', {
				room: this.groupInfo.idx,
				midx: this.$store.state.member.idx,
			});
		},
	} 
</script>