<template>
	<div class="right-menu-wrap" :class="{'right-active': rightFold }">
		<component :is="$store.state.rightMenu"/>
		<span class="folding folding-right" @click="setFolding(!rightFold)">
			<i v-if="!rightFold" class="fas fa-chevron-left"></i>
			<i v-else class="fas fa-chevron-right"></i>
		</span>
	</div>
</template>
<script type="text/javascript">
	import eventBus from '@/eventBus'

	export default {
		components: {
			groupList: () => import('./group-list')
		},
		created() {
		},
		computed: {
			rightFold () {
				return eventBus.rightFold
			}
		},
		methods: {
			setFolding (val) {
				eventBus.rightFold = val
			},

		},
	}
</script>