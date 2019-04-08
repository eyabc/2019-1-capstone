<template>
	<div class="friends-wrap">
		<ul class="member-info-btn title">
			<li><a class="title" href="#" @click.prevent="">전체</a></li>
			<li><a class="title" href="#" @click.prevent="$store.commit('isMember', 'requestedFriend')">대기 친구</a></li>
			<li><a  class="title" href="#" @click.prevent="$store.commit('isMember', 'requestedGroup')">대기 그룹</a></li>
		</ul>
		<p class="profile-title">내 프로필</p>
		<friendItem :info="myself" />
		<hr class='contour' />
		<p class="profile-title">즐겨찾는 친구</p>
		<friendItem v-for="(info, index) in friend" :info="info" :index="index" v-if="info.favorite===1 && info.request === 0"/> 
		<hr class='contour' />
		<p class="profile-title">내 그룹</p>
		<groupItem v-for="(info, index) in group" :info="info" :index="index" v-if="info.favorite===0"/> 

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