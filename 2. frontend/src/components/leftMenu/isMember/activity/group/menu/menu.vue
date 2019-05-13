<template>
	<div class='menu-wrap'>
		<menuCategory class="menu-border"/>
		<menuFilter />
		<menuOption />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			menuCategory: () => import('./category'),
			menuOption: () => import('./option'),
			menuFilter: () => import('./filter'),
		},
		data () {
			return {
			}
		},
	}
</script>
