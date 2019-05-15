<template>
	<div class="group-wrap">
		<chatMenu :menuFold="menuFold"/>
		<chatHeader :menuFold="menuFold"/>
		<component :is="component" :menuFold="menuFold" class="chat-content"/>
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
			category: () => import('./category'),
			groupInfo: () => import('./group-info'),
			groupAbout: () => import('./group-about'),
		},
		data () {
		return {
				groupInfo: this.$store.state.groupInfo,
				menuFold: false,
				myAuth: false,
			}
		},
		computed: {
			getSocket () {
				return this.$store.state.socket
			},
			component () {
				return this.$store.state.groupComp.upper
			}
		},	
		async created () {
			
			this.getSocket.emit('exit_room', {room: this.groupInfo.idx})
			this.getSocket.emit('join_room', {
				room: this.groupInfo.idx,
				midx: this.$store.state.member.idx,
			});
		},
	} 
</script>