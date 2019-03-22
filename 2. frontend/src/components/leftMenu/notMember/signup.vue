<template>
	<div class="signup-wrap" v-if="$store.getters.member === null">
		<p class="notMember-logo">HighFive</p>
		<form action="/api/signup" method="post" @submit.prevent="signup">
			<ul class="fields">
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-envelope"></i></span>
						<input type="text" name="email" class="full-width" required>
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
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-key"></i></span>
						<input type="password" name="password-re" class="full-width" required>
						<span class="lbl">비밀번호 재확인</span>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-user"></i></span>
						<input type="text" name="email" class="full-width" required>
						<span class="lbl">닉네임</span>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-map-marker-alt"></i></span>
						<input type="text" name="email" class="full-width" required>
						<span class="lbl">위치</span>
					</label>
				</li>
				<input class="login-btn btn" type="submit" value="완료">
				<input class="login-btn back-btn" type="button" value="로그인 페이지로 이동" @click.prevent="goLogin">

			</ul>
		</form>
	</div>
</template>
<script type="text/javascript">

	export default {
		methods : {
			goLogin () { this.$store.commit('leftMenu', 'login')}
		}
	}
</script>