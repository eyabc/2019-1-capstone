<template>
	<div class="category-content-wrap">
		<component :is="lower" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			addCategory: () => import('./add-category'),
			getList: () => import('./category-list'),
			// categoryDetail: () => import('./category-detail'),
			categoryEdit: () => import('./category-edit'),
		},
		props: ['lower']
	}
</script>