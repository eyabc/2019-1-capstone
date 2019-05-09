<template>
	<div class="chat-content" :class="">content
		<ul id="messages" v-for="(item, index) in msg">
			<li>{{ item }}</li>
		</ul>
		<p>{{ messages }}</p>
		<p>{{ $store.state.groupInfo }}</p>
		asdasd
		{{}}
	</div>

</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				msg: ['asdasd'],
				Socket: this.$store.state.socket
			}
		},
		computed: {
			messages () {
				this.Socket.on('message emit', function(data){
					// 	this.msgs.push(data)
					console.log(this.msgs);
				}); 
				return this.msg
			}
		}
	}
</script>