<template>
	<div class="left-menu-wrap"
		 :style="{
		 	'min-width': $store.state.leftMenuWidth + 'px',
		 	'width': $store.state.leftMenuWidth + 'px',
		 	'left': !leftFold ? -$store.state.leftMenuWidth + 'px' : 0
		 }">
		<component :is="$store.state.leftMenu" />
		<span class="folding folding-left" @click="setFolding(!leftFold)">
			<i v-if="!leftFold" class="fas fa-chevron-right"></i>
			<i v-else class="fas fa-chevron-left"></i>
		</span>
	</div>
</template>
<script type="text/javascript">
	import notMember from '@/components/leftMenu/notMember/notMember'
	import login from './notMember/login'
	import signup from './notMember/signup'
	import isMember from './isMember/isMember'


	export default {
		components: {
			notMember, login, signup, isMember
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