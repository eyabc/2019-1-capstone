<template>
	<div class="left-menu-wrap" :class="{'active': !leftFold }">
		<component :is="$store.state.leftMenu"/>
		<span class="folding" @click="setFolding(!leftFold)">
			<span class="folding-arrow" v-if="!leftFold">></span>
			<span class="folding-arrow" v-else><</span>
		</span>
	</div>
</template>
<script type="text/javascript">
	import notMember from '@/components/leftMenu/notMember/notMember'

	export default {
		components: {
			notMember
		},
		created() {
		},
		data() {
			return {
			}
		},
		methods: {
			setFolding (val) {
				this.$parent.leftFold = val
			},

		},
		props: ['leftFold']
	}
</script>