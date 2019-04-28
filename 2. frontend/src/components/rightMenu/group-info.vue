<template>
	<div class="group-info-wrap">
		<ul class="member-info-btn">
			<li><a class="title" @click.prevent="gotoList">목록</a></li>
		</ul>
		<ul class="group-info">
			<li><label>이름</label><span>{{ item.name}}</span></li>
			<li><label>참여자 권한</label><span>{{ authority }}</span></li>
			<li><label>그룹 허가</label><span>{{ permission }}</span></li>
			<li><label>생성날짜</label><span>{{ item.reg_date}}</span></li>
			<li><label>위치</label><br/><span>{{ item.place}}</span></li>
			<li><label>설명</label><br/><span>{{ item.description}}</span></li>
			<!-- <li><label></label><span>{{ item }}</span></li> -->
		</ul>
		<ul class="member-info-btn">
			<li v-if="relation === 0"><a class="title" @click.prevent=""># 이미 참여중인 그룹</a></li>
			<li v-if="relation === 0 "><a class="title" @click.prevent="">대화 시작</a></li>
			<li v-if="relation === false & item.permission === 0"><a class="title" @click.prevent="createdParticipant(item.default_authority, 0)">참여 하기</a></li>
			<li v-if="relation === false & item.permission === 1"><a class="title" @click.prevent="">참여 신청</a></li>
			<li v-if="relation === 2"><a class="title" @click.prevent="">참여 취소</a></li>
			<li><a class="title" @click.prevent="showMap">위치 조회</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import eventBus from '@/eventBus'

	export default {
		data () {
			return {
				authority: '',
				permission: '',
			}
		},
		computed: {
			item () {
				return this.$store.state.groupInfo
			},
			relation () {
				const relation = this.$store.state.getGroupMemberRelation
				if (relation === undefined) {
					return false
				} else {
					switch (relation.request) {
						case 0:
						return 0
						break;
						case 1: 
						return 1
						break;
						case 2: 
						return 0
						break;
					}
				}
			}
		},
		created () {
			console.log(this.relation)
			if(this.item.default_authority === 1){
				this.authority = '읽기'
			} else {
				this.authority = '읽기 쓰기'
			}
			if(this.item.permission === 1) {
				this.permission = '필요'
			} else {
				this.permission = '바로참여'
			}
		},
		methods: {
			gotoList () {
				eventBus.rightMenu = 'groupList'
			},
			showMap () {
				eventBus.setLocation({lat: this.item.lat, lng: this.item.lng})
			},
			createdParticipant (auth, req) {
				const data = {
					authority: auth,
					request: req,
				}
				this.$store.dispatch('createdParticipant', data)
			}
		}
	}
	</script>