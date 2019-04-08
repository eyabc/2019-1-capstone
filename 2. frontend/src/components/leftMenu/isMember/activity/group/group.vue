<template>
	<div class="group-wrap">
		<groupMenu />
		<groupContent />
		<groupFooter />
	</div>
</template>
<script type="text/javascript">

	export default {
		components: {
			groupFooter: () => import('./group-footer'),
			groupContent: () => import('./group-content'),
			groupMenu: () => import('./group-menu'),
		}
	} 
</script>