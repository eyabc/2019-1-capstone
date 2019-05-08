<template>
	<div class="group-wrap">
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	import io from 'socket.io-client';
	
	export default {
		components: {
			groupHome: () => import('./group-home'),
			participantSetting: () => import('./participant-setting/participant-setting'),
			managerSetting: () => import('./manager-setting/manager-setting'),
		},
		data () {
			return {
				component: 'groupHome',
			}
		},
		created () {
			var socket = io.connect('http://localhost:3000');
			socket.emit('join', this.$store.state.groupInfo.idx);
		}
	} 
</script>