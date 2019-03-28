<template>
	<div>
		<isMemberHeader class="ismember-header"/>
		<component v-if="$store.state.friend.length && $store.state.group.length" :is="$store.state.isMember" class="ismember-content"/>
	</div>
</template>
<script type="text/javascript">
	import isMemberHeader from './ismember-header'
	import friends from './friends/friends'


	export default {
		components: {
			isMemberHeader, friends
		},
		created () {
			this.$store.commit('getFriends')
			this.$store.commit('getGroups')
		},
		methods: {

		}
	}
</script>