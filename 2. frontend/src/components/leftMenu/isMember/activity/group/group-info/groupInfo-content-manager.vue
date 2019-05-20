<template>
	<div>
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			editGroupInfo: () => import('./manager/groupInfo-edit'),
			setParticipant: () => import('./manager/participant-setting'),
			addParticipant: () => import('./manager/participant-add'),
		},
		computed: {
			component () {
				return this.$store.state.groupComp.lower
			}
		}
	}
</script>