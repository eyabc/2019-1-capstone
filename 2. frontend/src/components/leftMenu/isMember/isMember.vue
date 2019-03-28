<template>
	<div>
	<isMemberHeader class="ismember-header"/>
	<component :is="$store.state.isMember" class="ismember-content"/>
	</div>
</template>
<script type="text/javascript">
	import isMemberHeader from './ismember-header'
	import friends from './friends/friends'

	export default {
		components: {
			isMemberHeader, friends
		},
	}
</script>