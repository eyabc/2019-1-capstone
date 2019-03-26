<template>
	<div class="signup-wrap" v-if="!$store.getters.member">
		<p class="notMember-logo">{{this.$store.getters.title}}</p>
		<form method="post" @submit.prevent='signup'>
			<ul class="fields">
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-envelope"></i></span>
						<input type="text" class="full-width"
						v-model="data.email"
						required />
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
						v-model="password_re">
						<span class="lbl">비밀번호 재확인</span>
						<p class="check-show">{{ statusPassword_re }}</p>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-user"></i></span>
						<input type="text" name="email" class="full-width" required v-model="data.nickname">
						<span class="lbl">닉네임</span>
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-map-marker-alt"></i></span>
						<input type="text" v-model="data.place" name="place" ref="place" class="full-width" required placeholder="위치를 입력해주세요" @keydown.enter.prevent="placeSubmit"> 
						<p class="check-show">{{ data.place }}</p>
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
				password_re: '',
				data: {
					email: '',
					password: '',
					nickname: '',
					place: '',
					lat: '',
					lng: '',
				},
				overlapEmailResult: '',
			}
		},
		computed: {
			statusEmail () {
				const email = this.data.email
				const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
				let result = ''
				if (email !== '') {
					if (!email.match(regex)) {
						result = '유효하지 않은 이메일 형식입니다.'
					} else {
						this.overlapEmail(email)	
						if (this.overlapEmailResult !== '') {
							result = this.overlapEmailResult
						}
					}
				}
				return result
			},
			statusPassword () {
				const password = this.data.password
				const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
				return password === '' || password.match(regex) ? '특수문자, 문자, 숫자 포함 형태의 8~15자리 이내' : '비밀번호 형식이 틀렸습니다.'
			},
			statusPassword_re () {
				const password_re = this.password_re
				return password_re === '' ? '' : password_re === this.data.password ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'
			},

		},

		mounted () {
			eventBus.initLocation(this)
			eventBus.initSearchBox(this.$refs.place)
			this.$on('getLocation', location => {
				this.data.lat = location.lat
				this.data.lng = location.lng
			})
		},
		methods: {
			goLogin () { this.$store.commit('leftMenu', 'login')},
			placeSubmit (e) { this.data.place=e.target.value },
			signup (e) {
				if(!this.statusAll()) {
					alert('양식을 다시 확인해 주세요') 
				} else {
					const frm = e.target
					const data = this.data
					this.$fetch('/api/member/signup', {
						method: 'post',
						headers: {'Content-Type':'application/json'},
						body: JSON.stringify({ data })
					}).then(json => {
						if(json.msg === false) {
							alert('회원가입 완료')
							this.$store.commit("leftMenu", 'login')
						} else {
							alert('회원가입 실패')
						}
					})
				}
			},
			overlapEmail (email) {
				const json = this.$fetch('/api/member/signup/email', {
					method: 'post',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify({ email })
				}).then(json => {
					this.overlapEmailResult = !json.email ? '이미 사용중인 이메일입니다.' : ''
				})
			},
			statusAll () {
				if (this.statusEmail === '' && this.statusPassword === '특수문자, 문자, 숫자 포함 형태의 8~15자리 이내' && this.statusPassword_re === '비밀번호가 일치합니다.') {
					return true
				}
			}
		}
	}

</script>