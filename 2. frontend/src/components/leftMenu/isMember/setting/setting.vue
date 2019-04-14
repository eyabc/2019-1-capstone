<template>
	<div>
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			version1: () => import('./version1/version1')
		},
		data () {
			return {
				component: 'version1'
			}
		}
	}
</script>