<template>
	<div class="create-group">
		<form  method="post" @submit.prevent="updateGroup">
			<ul class="fields">
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-tag"></i></span>
						<input type="text"  v-model="data.name"
						class="full-width" required placeholder="그룹 이름"> 
					</label>
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-sticky-note"></i></span>
						<textarea v-model="data.description" class="full-width" placeholder="그룹 설명"></textarea>
					</label>
				</li>
				<li>
					<div class="group-visibility">
						<label>공개 여부</label>
						<span class="dashed-btn width1" :class="{active:data.visibility===1}"><a href="#" ref="public" @click.prevent="setData('visibility',1)">전체 공개</a></span>
						<span class="dashed-btn width1" :class="{active:data.visibility===2}"><a href="#" ref="private"  @click.prevent="setData('visibility',2)">친구 공개</a></span><br/>
					</div> 
				</li>
				<li>
					<div class="group-visibility">
						<label>참여자 초기 권한</label>
						<span class="dashed-btn width1" :class="{active:data.default_authority===1}"><a href="#" ref="public" @click.prevent="setData('default_authority',1)">읽기</a></span>
						<span class="dashed-btn width1" :class="{active:data.default_authority===2}"><a href="#" ref="private" @click.prevent="setData('default_authority',2)">읽기/쓰기</a></span><br/>
						<span class="dashed-btn width1 title new" :class="{active:data.permission===1}"><a href="#" ref="private" @click.prevent="setPermission('permission',1)" >참여 허가 필요</a></span><br/>
					</div> 
				</li>
				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-key"></i></span>
						<input v-model="data.password" type="text" name="password" class="full-width" placeholder="비밀번호">
					</label>
				</li>


				<li>
					<label class="input-label">
						<span class="pre"><i class="fas fa-map-marker-alt"></i></span>
						<input type="text"  name="place" ref="place" 
						class="full-width" placeholder="위치를 입력해주세요"  required
						@keydown.enter.prevent="placeSubmit" v-model="data.place" 
						> 
						<p class="check-show">{{ data.place }}</p>
					</label>
				</li>
				<input class="login-btn btn" type="submit" value="수정 완료">
			</ul>
		</form>
	</div>
</template>
<script type="text/javascript">
	import eventBus from '@/eventBus'

	export default {
		data() {
			return {
				show: false,
				data: this.$store.state.groupInfo,

				data2: {
					friends: [],
				},
				friends: [],
				showFields:[
				{title: '닉네임',data: 'name'},
				{title: '가입날짜',data: '가입날짜'},
				]
			}
		},
		created() {
		},
		computed: {
			messages () {
				return this.member.profile_message
			}
		},
		mounted() {
			var json_data = this.$store.state.friend
			var result = [];

			for(var i in json_data)
				result.push({'idx':json_data[i].idx,'name': json_data[i].nickname, '가입날짜': json_data[i].reg_date});
			this.friends = result

			eventBus.initLocation(this)
			eventBus.initSearchBox(this.$refs.place)
			this.$on('getLocation', location => {
				this.data.lat = location.lat
				this.data.lng = location.lng
			})
		},
		methods: {
			setPermission (data, num) {
				this.data[data] = num === this.data[data] ? 0 : num
			},
			setData (data, num) {
				this.data[data] =  num
			},
			placeSubmit (e) { this.data.place=e.target.value },
			updateGroup (e) {
				this.$store.dispatch('updateGroupInfo', this.data)
				this.$store.commit('updateGroupInfo', this.data)
			},

		}
	}
</script>
<style>
.width1 {
	width: auto;
}
</style>