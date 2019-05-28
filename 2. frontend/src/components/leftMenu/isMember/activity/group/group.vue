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
			this.$store.dispatch('getGroupMemberRelation', {commit: 'myGroupRelation'})
			this.$store.dispatch('readCategory', {commit: 'category_list'})
			this.$store.dispatch('readParticipant')

		},
		beforeDestroy () {
			this.$store.commit('resetGroup')
			this.$store.commit('resetFilter')

		},

	} 
</script>