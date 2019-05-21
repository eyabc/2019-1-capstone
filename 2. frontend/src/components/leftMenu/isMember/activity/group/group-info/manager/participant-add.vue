<template>
	<div class='ismember-header-search'>
		<form @submit.prevent="searchMember">
			<label class="ismember-header-search-label">
				<span class="ismember-header-search-icon"><i class="fas fa-search"></i></span>
				<input type="text" name="email" placeholder="이메일로 사용자 검색" required>
			</label>
			<input type="submit">
		</form>

		<div class="member-info-desc search-result" v-if="search_result">
			<h3>{{search_result.nickname}}</h3><hr/>
			<ul class="group-info">
				<li><label>이메일</label><span class="content">{{search_result.email}}</span></li>
				<li><label>가입날짜</label><span class="content">{{search_result.reg_date}}</span></li>
				<li><label>위치</label><span class="content" v-if="search_result.place">{{search_result.place}}</span></li>
				<li><label>프로필 메세지</label><br /><span class="content" v-if="search_result.profile_message">{{search_result.profile_message}}</span></li>
			</ul>
			<form class="auth" @submit.prevent="invite">
					<span>권한</span>
					<select name="select">
						<option :value="0">매니저</option>
						<option :value="1">읽기/쓰기</option>
						<option :value="2">읽기</option>
					</select>
				<input type="submit" class="dashed-btn thiswidth" value="초대 하기"></input>
			</form>
		</div>

	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {

			}
		},
		methods: {
			async searchMember (e) {
				this.$store.dispatch('searchByEmail', e.target.email.value)
			},
			invite (e) {
				console.log(e.target.select.value)

			}
		},
		computed: {
			search_result () {
				return this.$store.state.searchedEmail
			}
		},
		beforeDestroy () {
			this.$store.commit('searchedEmail', null)
		}
	}
</script>
<style lang="scss">
.search-result {
	border-bottom: 2px solid #FFBB77;

}
.auth {
	select {margin: 0 10px;
		box-sizing: border-box;
		outline: 1px #FFD6AC solid;
		font-size: 15px;
		border: #fff;
		padding-left: 10px;
		height: 40px;
		text-align: center
	}
	option { height: 40px;}
	span { display: inline-block; padding: 0 20px;}
}
.thiswidth { padding: 9px; font-weight: bold; background: #fff;}
</style>