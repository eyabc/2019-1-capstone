<template>
	<div class="groupAbout-wrap">
		<div class="member-info-desc">
			<h3>그룹 이름</h3><hr/>
			<ul class="group-info">
				<li><label>설명</label><br/><span>{ item.description}</span></li>
				<li><label>매니저</label><br/><span>{ item.description}</span></li>
				<li><label>참여자 초기 권한</label><span>{ authority }</span></li>
				<li><label>공개여부</label><span>{ authority }</span></li>
				<li><label>그룹 허가</label><span>{ permission }</span></li>
				<li><label>생성날짜</label><span>{item.reg_date}</span></li>
				<li><label>위치</label><br/><span>{ item.place}</span></li>
			</ul>
			<ul class="member-info-btn">
				<li><a href="#" class="title cb" @click.prevent="showMap">위치정보조회</a></li>
			</ul>
		</div>
		<div class="member-info-desc">
			<h3>그룹 참여자</h3><hr/>
			<ul class="group-info">
				<li>
					<label>이름</label><span>가입날짜 / 권한 </span>
				</li>
			</ul>
		</div>
	</div>
</template>
<!-- 
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
			<li v-if="relation === false & item.permission === 1"><a class="title" @click.prevent="createdParticipant(item.default_authority, 2)">참여 신청</a></li>
			<li v-if="relation === 2"><a class="title" @click.prevent="cancel">참여 취소</a></li>
			<li><a class="title" @click.prevent="showMap">위치 조회</a></li>
		</ul>
	</div> -->
</template>

<script type="text/javascript">
	import eventBus from '@/eventBus'
	
	export default {
		computed: {
			myData () {
				return this.$store.getters.member
			}
		},
		methods: {
			showMap () {
				const location = { lat:this.myData.lat , lng: this.myData.lng}
				const data = { nickname:this.myData.nickname , place: this.myData.place }
				eventBus.memberLocation(location, data)
			},
			setMyinfo () {
				this.$store.commit('info', 'setMyInfo')
			}
		}
	}
</script>
<style type="text/css">
</style>