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
			<li><label></label><span>{{ item }}</span></li>
		</ul>
		<ul class="member-info-btn">
			<li v-if="item.permission === 0"><a class="title" @click.prevent="">그룹 참여</a></li>
			<li v-if="item.permission === 1"><a class="title" @click.prevent="">참여 신청</a></li>
			<li v-if="item.permission === 1"><a class="title" @click.prevent="">참여 취소</a></li>
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
			}
		},
		created () {
			if(this.item.default_authority === 1){
				this.authority = '읽기'
			} else {
				this.authority = '읽기 쓰기'
			}
			if(this.permission === 1) {
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
			}
		}
	}
</script>