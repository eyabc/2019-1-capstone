<template>
	<div class="chat-content" :class="">content
		<ul id="messages" v-for="(item, index) in msgs">
			<li>{{ item }}</li>
		</ul>
		<p>{{ $store.state.groupInfo }}</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				Socket: this.$store.state.socket,
				msgs: []
			}
		},
		computed: {
		},
		created () {
			this.Socket.off('message emit')
			this.Socket.on('message emit', data => {
				this.msgs.push(data)
				console.log(this.msgs)
			});

		},
		distroyed () {
			this.msgs = []
			this.Socket.emit('exit_room')
		}
	}
</script>