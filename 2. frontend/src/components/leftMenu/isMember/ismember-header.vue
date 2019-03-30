<template>
	<div class="ismember-header-wrap">
		<div class='ismember-header-search'>
			<form @submit.prevent>
				<label class="ismember-header-search-label">
					<span @mousedown="hoverToggle" class="ismember-header-search-icon"><i class="fas fa-pencil-alt"></i></span>
					<input type="text" name="place" placeholder="친구 검색" required>
				</label>
				<input type="submit">
				<div class="ismember-header-search-more" v-if="hover" >
					<p><input type="text" name="nameInplace" placeholder="닉네임" :class="{ active: $store.getters.isMember }"></p>
					<p><input type="text" name="nameAll" placeholder="이메일"></p>
					<p><input type="text" name="theme" placeholder="그룹"></p>
					<p><input type="text" name="theme" placeholder="카테고리"></p>
				</div>
			</form>
		</div>
		<ul class = "ismember-header-navigation">
			<li :class="{ active:friend }"><a href="#" @click.prevent="setIsMember('friends')" ><i class="fas fa-user-friends"></i></a></li>
			<li :class=""><a href="#"><i class="fas fa-comment"></i></a></li>
			<li :class=""><a href="#"><i class="fas fa-users"></i></a></li>
			<li :class=""><a href="#"><i class="fas fa-user-alt"></i></a></li>
			<li :class=""><a href="#"><i class="fas fa-cog"></i></a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">

	export default {
		components: {
			isMember: false,
		},
		created () {
			this.isMember = this.$store.getters.isMember
		},
		data() {
			return {
				hover: false,
				friend: true,
				
			}
		},
		methods : {
			hoverToggle() {
				this.hover = !this.hover
			},
			setIsMember(compo) {
				this.$store.commit('getFriends')
				this.$store.commit('getGroups')
				this.$store.commit('isMember', compo)

			}
		}
	}
</script>
<style type="">
a:hover {
	text-decoration: none!important;
	cursor: pointer;
}
</style>