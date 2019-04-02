<template>
	<div>
		<component :is="$store.state.compChat"/>
	</div>
</template>
<script type="text/javascript">
	import chatList from '@/components/leftMenu/chat/chat-list' 
	import groupIn from '@/components/leftMenu/chat/groupIn/group-in' 
	
	export default {
		components: {
			chatList, groupIn
		}
	}
</script>