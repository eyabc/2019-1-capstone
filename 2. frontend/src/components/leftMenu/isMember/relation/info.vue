<template>
	<div>
		<component :is="$store.state.info" class=""/>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			friendInfo: () => import(`./info/friend-info`),
			myInfo: () => import(`./info/my-info`),
			setMyInfo: () => import(`./info/set-my-info`),
		},
		data () {
			return {
				
			}
		},
		computed: {
			component() {
				return this.$store.state.info
			}
		}
	}
</script>