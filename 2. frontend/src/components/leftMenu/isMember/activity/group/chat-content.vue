<template>
	<div class="chat-content" :class="{active:menuFold}" ref="msg">
		<ul id="messages" v-for="(item, index) in msgs" v-if="filter.writer===''&&filter.content===''&&filter.category===''">
			<li v-if="item.category == group.current_category" :class="item.midx === $store.state.member.idx ? 'me' : 'others'">
				<p>
					<span class="name">{{item.nickname}}</span>
					<span class="reg_date">{{new Date(item.datetime)}} </span>
				</p>
				<p><span class="content" v-html="nl2br(item.content)"></span></p>
			</li>
		</ul>
 		<ul id="messages" v-for="(item, index) in filtered_msgs" v-if="filter.writer!=='' || filter.content!=='' || filter.category!==''">	
			<li :class="item.midx === $store.state.member.idx ? 'me' : 'others'">
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
				msgs: [],
				filter: this.$store.state.filter,
				msgs_filtered: false,
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
				return this.$store.state.group
			},
			filtered_msgs (item) {
				const condition =[]
				let msgs = this.msgs
				if (this.filter.writer !== '') {
					msgs = msgs.filter( v => v.nickname === this.filter.writer)
				}
				if (this.filter.content !== '') {
					msgs = msgs.filter( v => v.content === this.filter.content)
				} 	
				if (this.filter.category !== '') {
					const data = this.$store.state.group.category_list.find( v => v.name == this.filter.category )
					if(data !== undefined) { 
						msgs = msgs.filter( v => v.category === data.idx)
					}
				} 
				return msgs
			}
		},
		methods: {
		},
		props: ['menuFold']
	}
</script>