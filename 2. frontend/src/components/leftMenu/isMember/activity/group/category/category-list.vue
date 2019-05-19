<template>
	<div>
		<ul class="category-list">
			<li v-for="(item, index) in category_list" v-if="item.parent === null" >
				<p class="upper" @click="edit">{{item.name}}</p>
				<ul>
					<li v-for="(lower, index) in category_list" v-if="lower.parent === item.idx">
						<p class="lower"> {{ lower }}</p>
						<ul>
							<li v-for="(lower2, index) in category_list" v-if="lower2.parent === lower.idx">
								<p class="lower"> {{ lower }}</p>
							</li>
						</ul>
					</li>
				</ul>
				<ul class="lower">
					<li>하위카테고리 2</li>
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
			edit () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'categoryEdit'})
			}
		},
		computed: {
			category_list () {
				console.log(this.$store.state.group.category_list)
				return this.$store.state.group.category_list
			}
		}
	}
</script>