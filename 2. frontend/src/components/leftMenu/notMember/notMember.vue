<template>
	<div>
		<component :is="$store.state.notMember"/>
	</div>
</template>
<script type="text/javascript">
	import login from './login'
	export default {
		components: {
			login
		},
		created() {
			this.$store.commit('notMember', 'login')
		}
	}
</script>