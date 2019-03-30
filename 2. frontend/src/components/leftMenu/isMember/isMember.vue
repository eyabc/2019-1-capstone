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
	import myInfo from '@/components/leftMenu/isMember/my-info/my-info'
	export default {
		components: {
			isMemberHeader,
			friends,
			friendInfo,
			myInfo,
		},
		created () {
			this.$store.commit('getFriends')
			this.$store.commit('getGroups')
		},
		methods: {

		}
	}
</script>