<template>
	<div class="ismember-header-wrap">
		<div class='ismember-header-search'>
			<form @submit.prevent="searchMember">
				<label class="ismember-header-search-label">
					<span @mousedown="hoverToggle" class="ismember-header-search-icon"><i class="fas fa-search"></i></span>
					<input type="text" name="email" placeholder="이메일로 사용자 검색" required>
				</label>
				<input type="submit">
<!-- 				<div class="ismember-header-search-more" v-if="hover" >
					<p><input type="text" name="nameInplace" placeholder="닉네임" :class="{ active: $store.getters.isMember }"></p>
					<p><input type="text" name="nameAll" placeholder="이메일"></p>
					<p><input type="text" name="theme" placeholder="그룹"></p>
					<p><input type="text" name="theme" placeholder="카테고리"></p>
				</div> -->
			</form>
		</div>
		<ul class = "ismember-header-navigation">
			<li :class="{ active: $store.state.isMember  === 'relation' }"><a href="#" @click="setIsMember('relation')" ><i class="fas fa-user-friends"></i></a></li>
			<li :class="{ active: $store.state.isMember === 'activity' }"><a href="#" @click.prevent="setIsMember('activity'); $store.commit('activity', 'list')"><i class="fas fa-comment"></i></a></li>
		<!--	<li :class=""><a href="#"><i class="fas fa-users"></i></a></li>
			<!-- <li :class=""><a href="#"><i class="fas fa-user-alt"></i></a></li> -->
			<li :class="{ active: $store.state.isMember === 'setting' }" @click.prevent="setIsMember('setting')"><a href="#"><i class="fas fa-cog"></i></a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		components: {
			isMember: false,
		},
		created () {
			this.isMember = this.$store.state.isMember
		},
		data() {
			return {
				hover: false,
			}
		},
		methods : {
			hoverToggle () {
				this.hover = !this.hover
			},
			setIsMember (val) {
				this.$store.commit('isMember', val)
			},
			async searchMember (e) {
				this.$store.dispatch('getMemberByEmail', e.target.email.value)
			}
		},
	}
</script>
<style type="">
a:hover {
	text-decoration: none!important;
	cursor: pointer;
}
</style>