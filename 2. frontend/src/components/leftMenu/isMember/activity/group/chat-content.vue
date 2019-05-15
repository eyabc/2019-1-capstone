<template>
	<div class="chat-content" :class="{active:menuFold}" ref="msg">
		<p>{{ $store.state.groupInfo }}</p>
		<ul id="messages" v-for="(item, index) in msgs" >
			<li v-if="item.midx !== $store.state.member.idx" class="others">
				<p>
					<span class="name">{{item.nickname}}</span>
					<span class="reg_date">{{new Date(item.datetime)}} </span>
				</p>
				<p><span class="content" v-html="nl2br(item.content)"></span></p>
			</li>
			<li v-else class="me">
				<p>
					<span class="reg_date">{{new Date(item.datetime)}} </span>
					<span class="name">{{item.nickname}}</span>
				</p>
				<p><span class="content" v-html="nl2br(item.content)"></span></p>
			</li>
		</ul>
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
		async created () {
			this.Socket.off('message emit')
			this.Socket.on('message emit', data => {
				this.msgs.push(data)
			});
			await this.$store.dispatch('readChat', {commit: 'chat_content', category: this.$store.state.group.current_category})
			this.msgs = this.$store.state.group.chat_content
		},
		distroyed () {
			this.msgs = []
			this.Socket.emit('exit_room')
		},
		updated (){             
			var elem = this.$refs.msg
			elem.scrollTop = elem.scrollHeight;
		},
		methods: {
		},
		props: ['menuFold']
	}
</script>