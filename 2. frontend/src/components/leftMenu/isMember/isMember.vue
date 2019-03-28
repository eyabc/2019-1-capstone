<template>
	<div>
	<isMemberHeader class="ismember-header"/>
	<component :is="$store.state.isMember" class="ismember-content"/>
	</div>
</template>
<script type="text/javascript">
	import isMemberHeader from './ismember-header'
	export default {
		components: {
			isMemberHeader
		},
	}
</script>