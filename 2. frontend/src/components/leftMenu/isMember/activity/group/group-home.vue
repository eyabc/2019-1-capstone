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
				// this.getSocket.emit('exit_room')
				// this.getSocket.emit('join_room', {
				// 	room: this.$store.state.group.room,
				// 	midx: this.$store.state.member.idx,
				// });
		data () {
			return {
				groupInfo: this.$store.state.groupInfo,
				menuFold: false,
				myAuth: false,
				room: this.$store.state.group.room
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
			this.getSocket.emit('exit_room', {room: this.room})
			this.getSocket.emit('join_room', {
				room: this.room,
				midx: this.$store.state.member.idx,
			});
		},
	} 
</script>