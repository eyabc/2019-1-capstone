<template>
	<div class="category-wrap">
		<ul class="category-list">
			<li v-for="(item, key) in category_list" v-if="item.parent === 0">
				<p class="upper" @click="moveCategory(item.idx, item.name)">{{item.name}}</p>
				<ul>
					<li v-for="(lower, key) in category_list" v-if="lower.parent === item.idx">
						<p class="lower" @click="moveCategory(lower.idx, lower.name)">{{ lower.name }}</p>
					</li>
				</ul>
			</li>
		</ul>
		<p class="category-option" v-if="$store.state.group.myRelation.authority === 0">
			<span><i class="fas fa-plus" @click="addCategory"></i></span>
			<span><i class="fas fa-cog" @click="getList"></i></span>
		</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
		},
		data () {
			return {
				category_list: []
			}
		},
		methods: {
			addCategory () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'addCategory'})
			},
			getList () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'getList'})
			},
			moveCategory (idx, name) {
				this.$store.commit('current_category', idx)
				this.$store.commit('current_category_name', name)
				this.getSocket.emit('current category set',  { midx: this.$store.state.member.idx, category: idx})

			}

		},
		computed: {
			getSocket () {
				return this.$store.state.socket
			},
		},
		async created() {
			await this.$store.dispatch('readCategory', {commit: 'category_list'})
			this.category_list = this.$store.state.group.category_list
		}
	}
</script>
