<template>
	<div class="chat-content" :class="">content
		<ul id="messages" v-for="(item, index) in msg">
			<li>{{ item }}</li>
		</ul>
	</div>

</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				msg: []
			}
		},
		computed: {
			messages () {
				socket.on('message emit', function(m){
					this.msgs.push(m)
					console.log(this.msgs);
				}); 
				return this.msg
			}
		}
	}
</script>