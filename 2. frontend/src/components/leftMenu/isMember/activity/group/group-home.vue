<template>
	<div class="group-wrap">
		<chatMenu />
		<chatHeader />
		<chatContent />
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

			}
		},
		computed: {
			getSocket () {
				return this.$store.state.socket
			}
		},	
		created () {
			this.getSocket.emit('join', {cgidx: this.$store.state.groupInfo.idx});
		}
	} 
</script>