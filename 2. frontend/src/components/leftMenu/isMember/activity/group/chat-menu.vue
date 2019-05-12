<template>
	<div class="chat-menu" :class="{active:menuFold}">
		<component :is="component" />
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			memu: () => import('./menu/menu'),
		},
		data () {
			return {
				component: 'memu',
			}
		},
		props: ['menuFold']
	}
</script>
