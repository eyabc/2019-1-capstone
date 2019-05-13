<template>
	<div class="chat-content">
		<categoryHeader :lower="lower" />
		<categoryContent :lower="lower" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {	
			categoryHeader: () => import('./category/category-header'),
			categoryContent: () => import('./category/category-content')
		},
		computed: {
			lower () {
				return this.$store.state.groupComp.lower 
			}
			
		}
	}

</script>