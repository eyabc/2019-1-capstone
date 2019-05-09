<template>
	<div class="group-wrap">
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			groupHome: () => import('./group-home'),
			participantSetting: () => import('./participant-setting/participant-setting'),
			managerSetting: () => import('./manager-setting/manager-setting'),
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