<template>
	<div>
		<component :is="headerComp" />
		<component :is="contentComp" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			userContent : () => import('./group-info/groupInfo-content-user'),
			managerContent : () => import('./group-info/groupInfo-content-manager'),
			userHeader : () => import('./group-info/groupInfo-header-user'),
			managerHeader : () => import('./group-info/groupInfo-header-manager'),
		},
		computed: {
			auth () {
				return this.$store.state.groupComp.auth
			},
			headerComp () {
				return this.auth === 'user' ? 'userHeader' : 'managerHeader' 
			},
			contentComp () {
				return this.auth === 'user' ? 'userContent' : 'managerContent' 
			},
		}
	}
</script>