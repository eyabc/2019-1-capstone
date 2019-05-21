<template>
	<div>
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			resultEmail: () => import (`./result-email`),
			resultNone: () => import (`./result-none`)
		},
		data () {
			return {
			}
		},
		computed: {
			component () {
				return this.$store.state.searchedEmail ? 'resultEmail' : 'resultNone'
			}
		},
		beforeDestroy () {
			this.$store.commit('searchedEmail', null)
		}
	}
</script>