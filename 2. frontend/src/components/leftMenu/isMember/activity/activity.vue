<template>
	<div>
		<component :is="$store.state.activity"/>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {

			}
		},
		components: {
			list: () => import('./list/list'),
			createGroup: () => import('./create-group'),
			group: () => import('./group/group'),
		},
	}
</script>