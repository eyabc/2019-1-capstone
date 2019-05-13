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
		},
		computed: {
			component () {
				return this.$store.state.groupComp.lower
			}
		}
	}
</script>