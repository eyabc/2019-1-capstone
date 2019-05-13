<template>
	<div class="group-wrap">
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			groupHome: () => import('./group-home'),

		},
		data () {
			return {
				component: 'groupHome',
			}
		},
		created () {
		}
	} 
</script>