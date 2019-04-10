<template>
	<div class="member-info-wrap" @click="">
		<div class="member-info-short ">
			<img class="member-info-small-img"src="./default-avatar.png" alt="img" />
			<div class="member-info-desc">
				<h3 class="member-info-nickname">{{data.nickname}}</h3><hr/>
				<p class="member-info-etc">{{ data.profile_message }}</p>
				<p class="member-info-etc">{{ data.email }}</p>
				<p class="member-info-etc">가입 날짜 : {{ data.reg_date }}</p>
			</div>
		</div><br/>
		<ul class="member-info-btn">
			<li><a href="#" @click.prevent="setRequest">{{ request }}</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">

	export default {
		data () {
			return {
				data : this.$store.state.searchedEmail,
				request: '친구 요청',
			}
		},
		created() {
			// 친구인지 아닌지 확인하고 this.request 메세지 설정 
		}
		methods: {
			setRequest () {
				// 요청 상태인지 아닌지 확인 
				// 요청 상태 변환 
				
			}
		}
	}
</script>
