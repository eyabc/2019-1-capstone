<template>
	<div class="group-wrap">
		<chatMenu />
		<chatContent />
		<chatFooter />
	</div>
</template>
<script type="text/javascript">
	import chatFooter from './chat-footer'
	import chatContent from './chat-content'
	import chatMenu from './chat-menu'
	export default {
		components: {
			chatMenu,
			chatContent,
			chatFooter,
		}
	} 
</script>