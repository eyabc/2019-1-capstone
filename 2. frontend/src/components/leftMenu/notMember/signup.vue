<template>
	<div class="signup-wrap" v-if="!$store.getters.member">
		<p class="notMember-logo">{{this.$store.getters.title}}</p>
		<form method="post" @submit.prevent='signup'>
			<ul class="fields">
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-envelope"></i></span>
						<input type="text" v-model="data.email" class="full-width" required @focus="status.email=''" @blur="overlapEmail">
						<span class="lbl">이메일</span>
						<p class="check-show">{{ statusEmail }}</p>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-key"></i></span>
						<input type="password" name="password" class="full-width" required
						v-model="data.password">
						<span class="lbl">비밀번호</span>
						<p class="check-show">{{ statusPassword }}</p>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-key"></i></span>
						<input type="password" name="password-re" class="full-width" required
						v-model="data.password_re"						>
						<span class="lbl">비밀번호 재확인</span>
						<p class="check-show">{{ statusPassword_re }}</p>
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
						<input type="text" v-model="place" name="place" ref="place" class="full-width" required placeholder="위치를 입력해주세요" @keyup.enter="placeSubmit"> 
						<p class="check-show">{{ place }}</p>
					</label>
				</li>
				<input class="login-btn btn" type="submit" value="완료">
				<input class="login-btn back-btn" type="button" value="로그인 페이지로 이동" @click.prevent="goLogin">
			</ul>
		</form>
	</div>
</template>
<script type="text/javascript">
	import eventBus from '@/eventBus'
	export default {
		data () {
			return {
				place: '',
				password: '',
				status: {
					email: '',
					password: '특수문자, 문자, 숫자 포함 형태의 8~15자리 이내',
					password_re: '',
					nickname: '',
				},
				data: {
					email: '',
					password: '',
					password_re: '',
				}
			}
		},
		computed: {
			statusEmail () {
				const email = this.data.email
				const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
				return email === '' || email.match(regex) ? '' : '유효하지 않은 이메일 형식 입니다.'
			},
			statusPassword () {
				const password = this.data.password
				const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
				return password === '' || password.match(regex) ? '특수문자, 문자, 숫자 포함 형태의 8~15자리 이내' : '비밀번호 형식이 틀렸습니다.'
			},
			statusPassword_re () {
				const password_re = this.data.password_re
				return password_re === '' ? '' : password_re.match(this.data.password) ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'
			},

			statusAll () {

			}
		},

		mounted () {
			eventBus.initSearchBox(this.$refs.place)
		},
		methods: {
			goLogin () { this.$store.commit('leftMenu', 'login')},
			placeSubmit (e) { this.place=e.target.value },
			signup () {
				if (staus)
					if(json.success){
						alert('회원가입이 완료되었습니다.')
						this.$store.commit('leftMenu', 'login')
					} else {
						alert('양식을 다시 확인해 주세요')
					}
				}
			},
			async overlapEmail (e) {
				const email = e.target.value
				fetch('')
			}
		}

	</script>