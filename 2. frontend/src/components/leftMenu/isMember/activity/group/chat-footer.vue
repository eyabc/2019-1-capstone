<template>
	<div class="chat-footer">
		<form>
			<textarea
			rows="1" 
			class="chat-input"  
			autocomplete="off" 
			id="m"
			v-model.trim="content"
			data-gramm_editor="false"
			ref="chatInput"
			></textarea>
			<input type="submit" name="" value="send" @click.prevent="sendMessage">
		</form>
	</div>
</template>
<script type="text/javascript">
	import io from 'socket.io-client';
	export default {
		components: {
			
		},
		data(){
			return {
				groupInfo: this.$store.state.groupInfo,
           		content: '',
			}
		},
		computed: {
			getSocket () {
				return this.$store.state.socket
			}
		},		
		methods: {
			resizeTextarea (event) {
				if(100 < event.target.scrollHeight) {
					event.target.style.overflowY = 'scroll'
				} else {
					event.target.style.height = 'auto'
					event.target.style.height = (event.target.scrollHeight) + 'px'
					event.target.style.top = 30 - (event.target.scrollHeight) + 'px'
					event.target.style.overflowY = 'hidden'
				}
			},
			sendUserTyping() {
				this.getSocket.emit('userTyping', {
					room: this.getCurrentRoom,
					user: this.getUserData
				});
			},

			triggerMessageSend(e) {
				e.preventDefault();
				if (e.keyCode === 13 && !e.shiftKey) {
					this.sendMessage();
				} else {
					if (this.content !== '') {
						this.sendUserTyping();
					} else {
						this.sendUserNotTyping();
					}
				}
			},
			sendMessage() {
				this.getSocket.emit('send_msg', {
					cgidx: this.groupInfo.cgidx,
					midx: this.$store.state.member.idx,
					content: this.content,
					nickname: this.$store.state.member.nickname,
					datetime: new Date().getTime()
				});
				this.content = '';
				this.$refs.chatInput.focus()
				this.getSocket.off('send_msg')
				return false
			}
		},
		mounted () {
			this.$el.addEventListener('input', this.resizeTextarea)
		},
		beforeDestroy () {
			this.$el.removeEventListener('input', this.resizeTextarea)
		},
		render () {
			return this.$slots.default[0]
		},
	}


</script>
<style type="text/css">



.outline-0 {
	outline: 0;
}
</style>