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
			<p v-if="search_result.idx === $store.state.member.idx">내 정보 입니다</p>
			<p v-if="partyChk_computed">이미 참여자 관계 입니다.</p>
			<form class="auth" @submit.prevent="invite" v-else>
				<span>권한</span>
				<select name="select">
					<option :value="0">매니저</option>
					<option :value="1">읽기/쓰기</option>
					<option :value="2">읽기</option>
				</select>
				<input type="submit" class="dashed-btn thiswidth" value="초대 하기"></input>
			</form>
		</div>
		<div class="member-info-desc" v-if="">
			<h3>내 친구 목록</h3><hr/>
			<ul class="participant-item">
				<li v-for="(item, key) in friends" v-if="">
					<span>
						<span class="name">{{item.nickname}}</span>
						<span>{{item.reg_date}}</span>
					</span>
					<form class="auth" @submit.prevent="inviteFriend($event, item)">
						<select name="select">
							<option :value="0">매니저</option>
							<option :value="1">읽기/쓰기</option>
							<option :value="2">읽기</option>
						</select>
						<input type="submit" class="dashed-btn thiswidth" value="초대 하기"/>
					</form>
				</li>
			</ul>			
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				participant: this.$store.state.participant,
				partyChk: false,
			}
		},
		methods: {
			async searchMember (e) {
				await this.$store.dispatch('searchByEmail', e.target.email.value)
				const data = this.participant.find(v => v.midx === this.$store.state.searchedEmail.idx)
				this.partyChk = data !== undefined ? true : false
			},
			invite (e) {
				const authority = parseInt(e.target.select.value)
				let data = this.search_result
				const data2 = {midx: this.search_result.idx,authority: authority, request: 1, cgidx: this.$store.state.groupInfo.idx}
				this.$store.dispatch('createdParticipant2', data2)
				Object.assign(data, data2)
				this.$store.commit('createParticipant', data)
				this.partyChk = true
			},
			inviteFriend (e, info) {
				const authority = parseInt(e.target.select.value)
				const data = {midx: info.midx,authority: authority, request: 1, cgidx: this.$store.state.groupInfo.idx}
				this.$store.dispatch('createdParticipant2', data)
				Object.assign(data, info)
				this.$store.commit('createParticipant', data)
			}
		},
		computed: {
			search_result () {
				return this.$store.state.searchedEmail
			},
			partyChk_computed () { 
				return this.partyChk 
			},
			friends () {
				const participants = this.participant.map(v => v.midx)
				const data = this.$store.state.friend.filter(v => participants.indexOf(v.midx)=== -1)
				return data
			}
		},
		beforeDestroy () {
			this.$store.commit('searchedEmail', null)
		},
		mounted () {

		}
	}
</script>
<style lang="scss">
.search-result {
	border-bottom: 2px solid #FFBB77;

}
.participant-item {
	li { padding: 10px 0; display: flex; justify-content: space-between}
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