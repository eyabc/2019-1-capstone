<template>
	<div class="right-menu-wrap" :class="{'right-active': rightFold }">
		<component :is="$store.state.right"/>
		<span class="folding folding-right" @click="setFolding(!rightFold)">
			<i v-if="!rightFold" class="fas fa-chevron-left"></i>
			<i v-else class="fas fa-chevron-right"></i>
		</span>
	</div>
</template>
<script type="text/javascript">

	export default {
		components: {
		},
		created() {
		},
		data() {
			return {
				rightFold: false
			}
		},
		methods: {
			setFolding (val) {
				this.rightFold = val
			},

		},
	}
</script>