<template>
	<div class="right-menu-wrap" :class="{'right-active': rightFold }">
		<component :is="rightMenu"/>
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
			groupList: () => import('./group-list'),
			groupInfo: () => import('./group-info')
		},
		created() {
		},
		computed: {
			rightFold () {
				return eventBus.rightFold
			},
			rightMenu () {
				return eventBus.rightMenu
			}
		},
		methods: {
			setFolding (val) {
				eventBus.rightFold = val
			},

		},
	}
</script>