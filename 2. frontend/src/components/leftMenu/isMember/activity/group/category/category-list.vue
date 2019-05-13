<template>
	<div>
		<ul class="category-list">
			<li><p class="upper" @click="edit">카테고리 1</p>
				<ul class="lower">
					<li>하위카테고리 2</li>
				</ul>
			</li>
			<li><p class="upper">카테고리 1</p>
				<ul class="lower">
					<li>하위카테고리 2</li>
				</ul>
			</li>
			<li><p class="upper">카테고리 1</p>
				<ul class="lower">
					<li>하위카테고리 2</li>
				</ul>
			</li>
			<li><p class="upper">카테고리 1</p>
				<ul class="lower">
					<li>하위카테고리 2</li>
				</ul>
			</li>
			<li><p class="upper">카테고리 1</p>
				<ul class="lower">
					<li>하위카테고리 2</li>
				</ul>
			</li>
			<li><p class="upper">카테고리 1</p>
				<ul class="lower">
					<li>하위카테고리 2</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		methods: {
			edit () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'categoryEdit'})
			}
		}
	}
</script>