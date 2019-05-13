<template>
	<div class="category-wrap">
		<ul class="category-list">
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
			<li><p class="upper">카테고리 1</p>
				<ul class="lower">
					<li>하위카테고리 2</li>
				</ul>
			</li>
		</ul>
		<!-- 나의 권한을 확인한 후 display 설정 css 필요 -->
		<p class="category-option">
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
			}
		},
		methods: {
			addCategory () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'addCategory'})
			},
			getList () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'getList'})
			}

		}
	}
</script>
