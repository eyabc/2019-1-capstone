<template>
	<div class="signup-wrap" v-if="!$store.getters.member">
		<p class="login-logo">HighFive</p>
		<form action="/api/signup" method="post" @submit.prevent="signup">
			<ul class="fields">
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-user"></i></span>
						<input type="text" name="id" class="full-width" required>
						<span class="lbl">아이디</span>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-key"></i></span>
						<input type="password" name="pw" class="full-width" required>
						<span class="lbl">비밀번호</span>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-key"></i></span>
						<input type="password" name="pw-re" class="full-width" required>
						<span class="lbl">비밀번호 재확인</span>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="far fa-envelope"></i></span>
						<input type="text" name="email" class="full-width" required>
						<span class="lbl">이메일</span>
					</label>
				</li>
				<input class="btn" type="submit" value="완료">
			</ul>
		</form>
	</div>
</template>
<script type="text/javascript">
	
</script>