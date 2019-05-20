	<template>
		<div>
			<ul class="member-info-btn">
				<li><a class="title" href="#" :class="{active:request===0 & authority === true}" @click.prevent="setAuth(0, true)">모두보기</a></li>
				<li><a class="title" href="#" :class="{active:request===0 & authority === 0}" @click.prevent="setAuth(0, 0)" >매니저</a></li>
				<li><a class="title" href="#" :class="{active:request===0 & authority === 1}" @click.prevent="setAuth(0, 1)" >읽기/쓰기</a></li>
				<li><a class="title" href="#" :class="{active:request===0 & authority === 2}" @click.prevent="setAuth(0, 2)" >읽기</a></li>
				<li><a class="title new" href="#" :class="{active:request===1}" @click.prevent="setAuth(1, true)" >요청: 그룹->멤버</a></li>
				<li><a class="title new" href="#" :class="{active:request===2}" @click.prevent="setAuth(2, true)" >요청: 멤버->그룹</a></li>
			</ul>
			<ul class="participant-item">
				<li v-for="(item, key) in paritipant" v-if="item.request ===  0 && request === 0 && authority === item.authority">
					<span>
						<span class="name">{{item.nickname}}</span>
						<span>{{item.reg_date}}</span>
					</span>
					<span>
						<select name="" v-model="item.authority">
							<option :value="0">매니저</option>
							<option :value="1">읽기</option>
							<option :value="2">읽기/쓰기</option>
						</select>
						<span class=""><i class="fas fa-times"></i></span>
					</span>
				</li>				
				<li v-for="(item, key) in paritipant" v-if="item.request ===  0 & request === 0 & authority === true">
					<span>
						<span class="name">{{item.nickname}}</span>
						<span>{{item.reg_date}}</span>
					</span>
					<span>
						<select name="" v-model="item.authority">
							<option :value="0">매니저</option>
							<option :value="1">읽기</option>
							<option :value="2">읽기/쓰기</option>
						</select>
						<span class=""><i class="fas fa-times"></i></span>
					</span>
				</li>
				<li v-for="(item, key) in paritipant" v-if="item.request !== 0 & request === item.request">
					<span>
						<span class="name">{{item.nickname}}</span>
						<span>{{item.reg_date}}</span>
					</span>
					<span>
						<select name="" v-model="item.authority">
							<option :value="0">매니저</option>
							<option :value="1">읽기</option>
							<option :value="2">읽기/쓰기</option>
						</select>
						<span class=""><i class="fas fa-times"></i></span>
					</span>
				</li>
			</ul>
		</div>
	</template>
	<script type="text/javascript">
		// 클릭하면 참여자 정보 조회가능 
		export default {
			data () {
				return {
					paritipant: this.$store.state.group.participant,
					request: 0,
					authority: true,
				}
			},
			methods: {
				setAuth(request, authority) {
					this.request = request
					this.authority = authority
				}
			},
			computed: {
			}
		}
	</script>
	<style lang="scss">
	.participant-item {
		li { padding: 10px 0; display: flex; justify-content: space-between}
		select {margin: 0 10px;
			box-sizing: border-box;
			outline: 1px #FFD6AC solid;
			font-size: 15px;
			border: #fff;
			padding-left: 10px;
			height: 40px;
		}
		option {  width: 50px; }
		.fa-times {padding: 10px; cursor: pointer; transition: 0.3s;
			&:hover { transition: 0.3s; color: red}
		}
	}
</style>