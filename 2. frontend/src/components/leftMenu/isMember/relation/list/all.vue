<template>
	<div class="friends-wrap">
		<p class="profile-title">내 프로필</p>
		<friendItem :info="myself" />
		<hr class='contour' />
		<p class="profile-title">즐겨찾는 친구</p>
		<friendItem v-for="(info, index) in friend" :info="info" :index="index" v-if="info.favorite===1"/> 
		<hr class='contour' />
		<p class="profile-title">그룹</p>
		<groupItem v-for="(info, index) in groups" :info="info" :index="index"/> 
		<hr class='contour' />
		<p class="profile-title">친구</p>
		<friendItem v-for="(info, index) in friend" :info="info" :index="index" /> 
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			friendItem: ()=> import('./profile-item'),
			groupItem: ()=> import('./group-item')
		},
		computed: {
			friend () {
				return this.$store.state.friend
			},
			groups () {
				return this.$store.state.groups
			}
		},
		created () {
			this.$store.dispatch('getFriends')
			this.$store.dispatch('getGroups', { request: 0 })
		},
		data() {
			return {
				default_img: './default-avatar.png',
				myself: this.$store.getters.member,
			}
		},
		methods: {

		}


	}
</script>