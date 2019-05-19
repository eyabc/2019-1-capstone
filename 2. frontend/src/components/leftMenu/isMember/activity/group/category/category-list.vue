<template>
	<div>
		<ul class="category-list">
			<li v-for="(item, key) in category_list" v-if="item.parent === 0">
				<p class="upper" @click="edit(item.idx, key)">{{item.name}}</p>
				<ul>
					<li v-for="(lower, key) in category_list" v-if="lower.parent === item.idx">
						<p class="lower" @click="edit(lower.idx, key)">{{ lower.name }}</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			lowerCategory: () => import('./category-list')
		},
		methods: {
			edit (idx, key) {
				this.$store.commit('category_key', {idx: idx, key: key})
				this.$store.commit('groupComp', {upper: 'category', lower: 'categoryEdit'})
			}
		},
		computed: {
			category_list () {
				return this.$store.state.group.category_list
			}
		}
	}
</script>
