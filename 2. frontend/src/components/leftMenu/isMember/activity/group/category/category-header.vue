<template>
	<div>
		<ul class="member-info-btn">
			<li><a class="title" href="#" @click.prevent=""># 카테고리</a></li>
			<li><a class="title" href="#" :class="{active:lower==='getList'}" @click.prevent="getList" >목록</a></li>
			<li><a class="title" href="#" :class="{active:lower==='addCategory'}" @click.prevent="addCategory">추가</a></li>
		</ul>
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
		computed: {

		},
		methods: {
			addCategory () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'addCategory'})
			},
			getList () {
				this.$store.commit('groupComp', {upper: 'category', lower: 'getList'})
			}
		},
		props: ['lower']
	}
</script>