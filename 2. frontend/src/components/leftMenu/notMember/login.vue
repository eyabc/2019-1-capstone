<template>
	<div class="login-wrap" v-if="!$store.getters.member">
		<p class="notMember-logo">HighFive</p>
		<form class="login-form" @submit.prevent="login">
			<ul class="fields">
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-envelope"></i></span>
						<input type="text" name="email" class="full-width" required autofocus>
						<span class="lbl">이메일</span>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-key"></i></span>
						<input type="password" name="password" class="full-width" required>
						<span class="lbl">비밀번호</span>
					</label>
				</li>
			</ul>
			<button class="login-btn btn" type="submit">로그인</button>
		</form>
		<p><a href="#" @click.prevent='' class="login-option">비밀 번호를 분실하였습니까?</a></p>
		<p><a href="#" @click.prevent='joinMember' class="login-option">아직 HighFive회원이 아니십니까?</a></p>
	</div>
</template>
<script type="text/javascript">
	export default {
		methods: {
			login () {
			},
			joinMember () { this.$store.commit('leftMenu','signup')}
		}
	}
</script>

