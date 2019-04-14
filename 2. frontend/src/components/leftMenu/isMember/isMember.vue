<template>
	<div class="ismember" ref="scrolls">
		<isMemberHeader class="ismember-header"/>
		<component :is="$store.state.isMember" class="ismember-content"/>
	</div>
</template>
<script type="text/javascript">
	const isMember = '@/components/leftMenu/isMember'
//	import friends from '@/components/leftMenu/isMember/friends/all'
//	import requestedFriend from '@/components/leftMenu/isMember/friends/requested-friend'
//	import requestedGroup from '@/components/leftMenu/isMember/friends/requested-group'
//	import friendInfo from '@/components/leftMenu/isMember/friends/friend-info'
//	import myInfo from '@/components/leftMenu/isMember/my-info/my-info'
//	import chat from '@/components/leftMenu/chat/chat-main'

// commitList: () => import('@/components/task/commit-list.vue'),

	export default {
		components: {
			relation: () => import(`./relation/list`),
			info: () => import(`./relation/info`),
	//		friends, friendInfo, myInfo, setMyInfo,
	//		chat, requestedFriend, requestedGroup,
	//@/components/leftMenu/isMember/ismember-header
			isMemberHeader: () => import(`./ismember-header`),
			search: () => import(`./search/search`),
			activity: () => import(`./activity/activity`),
			setting: () => import(`./setting/setting`),
		},
		created () {
			this.$store.commit('isMember', 'relation')
		},
		mounted() {
		},
		methods: {

		}
	}
</script>