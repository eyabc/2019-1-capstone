<template>
	<div>
		<isMemberHeader class="ismember-header"/>
		<component v-if="$store.state.friend.length && $store.state.group.length" :is="$store.state.isMember" class="ismember-content"/>
	</div>
</template>
<script type="text/javascript">
	import isMemberHeader from '@/components/leftMenu/isMember/ismember-header'
	import friends from '@/components/leftMenu/isMember/friends/friends'
	import friendInfo from '@/components/leftMenu/isMember/friends/friend-info'
	export default {
		components: {
			isMemberHeader,
			friends,
			friendInfo,
		},
		created () {
			this.$store.commit('getFriends')
			this.$store.commit('getGroups')
		},
		methods: {

		}
	}
</script>