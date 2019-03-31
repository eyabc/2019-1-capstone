<template>
	<div class="friends-wrap">
		<p class="profile-title">내 프로필</p>
		<friendItem :info="myself" />
		<hr class='contour' />
		<p class="profile-title">즐겨찾는 친구</p>
		<friendItem v-for="(info, index) in friend" :info="info" :index="index" v-if="info.favorite===1 && info.request === 0"/> 
		<hr class='contour' />
		<p class="profile-title">즐겨찾는 그룹</p>
		<groupItem v-for="(info, index) in group" :info="info" :index="index" v-if="info.favorite===1"/> 

		<hr class='contour' />
		<friendItem v-for="(info, index) in friend" :info="info" :index="index" v-if="info.request === 0" /> 
	</div>
</template>
<script type="text/javascript">
	import friendItem from './profile-item' 
	import groupItem from './group-item' 
	export default {
		components: {
			friendItem, groupItem
		},
		computed: {
			friend () {
				return this.$store.state.friend
			},
			group () {
				return this.$store.state.group
			}
		},
		created () {
				this.$store.commit('getFriends')
				this.$store.commit('getGroups')
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