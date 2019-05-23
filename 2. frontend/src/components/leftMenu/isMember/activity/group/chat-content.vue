<template>
	<div class="chat-content" :class="{active:menuFold}" ref="msg">
		<ul id="messages" v-for="(item, index) in msgs">
			<li v-if="item.category == group.current_category" :class="item.midx === $store.state.member.idx ? 'me' : 'others'">
				<p>
					<span class="name">{{item.nickname}}</span>
					<span class="reg_date">{{new Date(item.datetime)}} </span>
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
				console.log(data.category, this.group.current_category)
				this.msgs.push(data)
			});
			const category = this.$store.state.group.current_category
			await this.$store.dispatch('readChat', {commit: 'chat_content'})
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
		computed: {
			group () {
				console.log(this.$store.state.group.current_category)
				console.log(this.msgs.map(v => v.category))
				return this.$store.state.group
			}
		},
		methods: {
		},
		props: ['menuFold']
	}
</script>